import streamlit as st
import pandas as pd
import numpy as np
import plotly.express as px
import plotly.graph_objects as go
import folium
from streamlit_folium import folium_static
from folium.plugins import MarkerCluster

# Set page configuration
st.set_page_config(
    page_title="EV Charging Stations in India",
    page_icon="⚡",
    layout="wide"
)

# Load the cleaned data
@st.cache_data
def load_data():
    df = pd.read_csv('ev-charging-stations-india1.csv')
    df.columns = df.columns.str.strip().str.lower().str.replace(' ', '_')
    df['lattitude'] = df['lattitude'].astype(str).str.replace(',', '').astype(float)
    df['longitude'] = df['longitude'].astype(str).str.replace(',', '').astype(float)
    df.dropna(subset=['lattitude', 'longitude'], inplace=True)
    df['city'] = df['city'].fillna('Unknown').str.title()
    df['state'] = df['state'].fillna('Unknown').str.title()

    if 'charger_type' in df.columns:
        df['charger_type'] = df['charger_type'].fillna('Unknown').str.title()
    else:
        # Try to infer correct column
        potential_matches = [col for col in df.columns if 'charger' in col and 'type' in col]
        if potential_matches:
            df['charger_type'] = df[potential_matches[0]].fillna('Unknown').str.title()
        else:
            df['charger_type'] = 'Unknown'

    return df

df = load_data()

# Check for required columns
required_columns = ['state', 'city', 'charger_type', 'lattitude', 'longitude']
missing = [col for col in required_columns if col not in df.columns]
if missing:
    st.error(f"Missing required columns: {', '.join(missing)}. Please check your dataset.")
    st.stop()

# Sidebar filters
st.sidebar.title("Filters")
selected_states = st.sidebar.multiselect("Select States", options=df['state'].unique(), default=df['state'].unique())
filtered_by_state = df[df['state'].isin(selected_states)]
selected_cities = st.sidebar.multiselect("Select Cities", options=filtered_by_state['city'].unique(), default=[])
charger_types = df['charger_type'].unique()
selected_types = st.sidebar.multiselect("Select Charger Types", options=charger_types, default=charger_types)

filtered_df = df[
    (df['state'].isin(selected_states)) &
    (df['city'].isin(selected_cities) if selected_cities else True) &
    (df['charger_type'].isin(selected_types))
]

st.title("⚡ EV Charging Stations in India")
st.markdown("Explore the electric vehicle charging infrastructure across India.")

col1, col2, col3 = st.columns(3)
col1.metric("Total Stations", len(df))
col2.metric("Filtered Stations", len(filtered_df))
col3.metric("States Covered", df['state'].nunique())

tab1, tab2, tab3 = st.tabs(["Map View", "Data Analysis", "Raw Data"])

with tab1:
    st.subheader("Geographical Distribution")
    m = folium.Map(location=[20.5937, 78.9629], zoom_start=5)
    marker_cluster = MarkerCluster().add_to(m)
    for idx, row in filtered_df.iterrows():
        if not pd.isna(row['lattitude']) and not pd.isna(row['longitude']):
            folium.Marker(
                location=[row['lattitude'], row['longitude']],
                popup=f"{row['name']}<br>{row['city']}, {row['state']}<br>Type: {row.get('charger_type', 'Unknown')}",
                icon=folium.Icon(color='green', icon='bolt', prefix='fa')
            ).add_to(marker_cluster)
    folium_static(m, width=1200, height=600)

    fig = px.scatter_mapbox(
        filtered_df,
        lat="lattitude",
        lon="longitude",
        hover_name="name",
        hover_data=["city", "state", "charger_type"],
        color="charger_type",
        zoom=4,
        height=600,
        title="EV Charging Stations Across India"
    )
    fig.update_layout(mapbox_style="open-street-map", margin={"r":0,"t":40,"l":0,"b":0})
    st.plotly_chart(fig, use_container_width=True)

with tab2:
    st.subheader("Data Analysis")
    col1, col2 = st.columns(2)

    with col1:
        state_counts = filtered_df['state'].value_counts().reset_index()
        state_counts.columns = ['State', 'Count']
        fig1 = px.bar(state_counts, x='Count', y='State', orientation='h', title='Stations by State', color='Count')
        st.plotly_chart(fig1, use_container_width=True)

    with col2:
        city_counts = filtered_df['city'].value_counts().reset_index().head(20)
        city_counts.columns = ['City', 'Count']
        fig2 = px.bar(city_counts, x='Count', y='City', orientation='h', title='Top 20 Cities by Station Count', color='Count')
        st.plotly_chart(fig2, use_container_width=True)

    type_counts = filtered_df['charger_type'].value_counts().reset_index()
    type_counts.columns = ['Charger Type', 'Count']
    fig3 = px.pie(type_counts, values='Count', names='Charger Type', title='Charger Type Distribution')
    st.plotly_chart(fig3, use_container_width=True)

    st.markdown("### Additional Visual Insights")
    col3, col4 = st.columns(2)

    with col3:
        fig4 = px.histogram(filtered_df, x='state', color='charger_type',
                            title='Distribution of Charger Types per State')
        st.plotly_chart(fig4, use_container_width=True)

    with col4:
        pivot = filtered_df.pivot_table(index='state', columns='charger_type', aggfunc='size', fill_value=0)
        fig5 = go.Figure()
        for charger in pivot.columns:
            fig5.add_trace(go.Bar(name=charger, x=pivot.index, y=pivot[charger]))
        fig5.update_layout(barmode='stack', title='Stacked Bar Chart of Charger Types by State')
        st.plotly_chart(fig5, use_container_width=True)

    st.markdown("### Charger Type by City")
    if 'city' in filtered_df.columns and 'charger_type' in filtered_df.columns:
        charger_city = filtered_df.groupby(['city', 'charger_type']).size().reset_index(name='count')
        fig6 = px.sunburst(charger_city, path=['city', 'charger_type'], values='count',
                           title='Charger Types by City Hierarchy')
        st.plotly_chart(fig6, use_container_width=True)
    else:
        st.warning("Required columns for Sunburst chart are missing.")

    st.markdown("### Heatmap of Charger Counts by State and Type")
    heatmap_data = filtered_df.pivot_table(index='state', columns='charger_type', aggfunc='size', fill_value=0)
    fig7 = px.imshow(heatmap_data, text_auto=True, title="Heatmap of Charger Types by State")
    st.plotly_chart(fig7, use_container_width=True)

    st.markdown("### Charger Distribution Box Plot")
    fig8 = px.box(filtered_df, x='state', y='lattitude', color='charger_type',
                 title='Box Plot of Charger Latitude Distribution by State')
    st.plotly_chart(fig8, use_container_width=True)

    st.markdown("### Charger Count vs Longitude")
    fig9 = px.scatter(filtered_df, x='longitude', y='lattitude', color='charger_type',
                     title='Charger Locations by Longitude and Latitude')
    st.plotly_chart(fig9, use_container_width=True)

    st.markdown("### Charger Type Distribution by State - Treemap")
    tree_data = filtered_df.groupby(['state', 'charger_type']).size().reset_index(name='count')
    fig10 = px.treemap(tree_data, path=['state', 'charger_type'], values='count', title='Charger Types per State')
    st.plotly_chart(fig10, use_container_width=True)

with tab3:
    st.subheader("Raw Data")
    st.dataframe(filtered_df, height=600)

st.sidebar.download_button(
    label="Download Filtered Data",
    data=filtered_df.to_csv(index=False),
    file_name="filtered_ev_charging_stations.csv",
    mime="text/csv"
)

st.sidebar.markdown("---")
st.sidebar.markdown("### About")
st.sidebar.markdown("""
This app visualizes EV charging station data across India.
- **Data Source**: EV charging stations dataset
- **Built with**: Streamlit, Pandas, Plotly, Folium
""")
