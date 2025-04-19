import streamlit as st
import pandas as pd
import numpy as np
import joblib
import folium
from folium.plugins import MarkerCluster
from streamlit_folium import st_folium
import plotly.express as px
import matplotlib.pyplot as plt
import seaborn as sns
import os

# --- CONFIG ---
st.set_page_config(page_title="GreenAI Carbon Emission Predictor", layout="wide")

# --- LOAD DATA ---
@st.cache_data
def load_data():
    df = pd.read_csv("carbonemission.csv")
    model = joblib.load("greenai_carbon_model.pkl")
    scaler = joblib.load("scaler.pkl")
    return df, model, scaler

df, model, scaler = load_data()

features = [
    'co2_per_capita',
    'energy_use_gwh',
    'renewable_pct',
    'vehicles_per_km',
    'public_transport_score',
    'industrial_zones',
    'green_buildings',
    'population_density_km2',
    'tree_cover_pct',
    'air_quality_index',
    'emission_intensity',
    'transport_impact'
]

# --- HEADER ---
st.title("🌱 GreenAI Carbon Emission Predictor")
st.markdown("Predict total CO2 emissions for Indian cities using sustainability features. Ideal for planners, researchers, and eco-enthusiasts!")

# --- SIDEBAR USER INPUT ---
st.sidebar.header("Enter Sustainability Metrics")

user_input = {feature: st.sidebar.slider(feature.replace('_', ' ').capitalize(), 0.0, 1000.0, float(df[feature].median())) for feature in features}
input_df = pd.DataFrame([user_input])
input_scaled = scaler.transform(input_df)
prediction = model.predict(input_scaled)[0]

st.sidebar.subheader("Predicted Total CO2 Emission (kt):")
st.sidebar.success(f"{prediction:.2f} kt")

# --- FEATURE IMPORTANCE ---
st.subheader("🔍 Feature Importance")
importances = model.feature_importances_
feat_df = pd.DataFrame({'Feature': features, 'Importance': importances}).sort_values(by="Importance", ascending=True)

fig1, ax1 = plt.subplots(figsize=(8, 5))
sns.barplot(x="Importance", y="Feature", data=feat_df, palette="Greens_r", ax=ax1)
st.pyplot(fig1)

# --- FOLIUM MAP ---
st.subheader("📍 City-wise Carbon Emission Map")
m = folium.Map(location=[22.9734, 78.6569], zoom_start=5)
marker_cluster = MarkerCluster().add_to(m)

for _, row in df.iterrows():
    if pd.notnull(row.get('latitude')) and pd.notnull(row.get('longitude')):
        popup = f"{row['city']}<br>CO2: {row['total_co2_kt']} kt"
        folium.CircleMarker(
            location=[row['latitude'], row['longitude']],
            radius=6,
            color='green',
            fill=True,
            fill_opacity=0.6,
            popup=popup
        ).add_to(marker_cluster)

st_data = st_folium(m, width=700, height=500)

# --- PLOTLY RADAR CHART ---
st.subheader("📊 Radar View of Selected Metrics")
radar_df = pd.DataFrame({
    'Feature': list(user_input.keys()),
    'Value': list(user_input.values())
})
fig2 = px.line_polar(radar_df, r='Value', theta='Feature', line_close=True)
fig2.update_traces(fill='toself')
st.plotly_chart(fig2, use_container_width=True)

# --- ADDITIONAL VISUALIZATIONS ---
st.subheader("📈 Distribution of Key Features")
with st.expander("Show Distribution Charts"):
    for feature in features:
        fig, ax = plt.subplots()
        sns.histplot(df[feature], kde=True, ax=ax, color='lightgreen')
        ax.set_title(f"Distribution of {feature.replace('_', ' ').capitalize()}")
        st.pyplot(fig)

st.subheader("📉 CO2 vs Renewable Energy & Public Transport")
fig3 = px.scatter(df, x="renewable_pct", y="normalized_co2", color="public_transport_score",
                  hover_data=['city'], title="CO2 Emission vs Renewable Energy (%) and Public Transport")
st.plotly_chart(fig3, use_container_width=True)

# --- CORRELATION MATRIX ---
st.subheader("📊 Feature Correlation Heatmap")
corr = df[features + ['normalized_co2']].corr()
fig4, ax4 = plt.subplots(figsize=(10, 8))
sns.heatmap(corr, annot=True, cmap="Greens", fmt=".2f", ax=ax4)
ax4.set_title("Correlation Matrix")
st.pyplot(fig4)

# --- TREND ANALYSIS PLACEHOLDER ---
if 'year' in df.columns:
    st.subheader("📆 Year-wise CO2 Emission Trend")
    trend_df = df.groupby('year')['normalized_co2'].mean().reset_index()
    fig5 = px.line(trend_df, x='year', y='normalized_co2', markers=True, title="Average CO2 Emissions Over Years")
    st.plotly_chart(fig5, use_container_width=True)

# --- PIE CHART ---
st.subheader("🥧 CO2 Distribution by City")
city_avg = df.groupby('city')['normalized_co2'].mean().reset_index().sort_values(by='normalized_co2', ascending=False).head(10)
fig6 = px.pie(city_avg, names='city', values='normalized_co2', title="Top 10 Cities by Average CO2 Emission")
st.plotly_chart(fig6, use_container_width=True)

# --- BAR COMPARISON ---
st.subheader("🏙️ Sustainability Score by City")
if 'sustainability_score' in df.columns:
    score_df = df.groupby('city')['sustainability_score'].mean().reset_index().sort_values(by='sustainability_score', ascending=False).head(10)
    fig7 = px.bar(score_df, x='city', y='sustainability_score', title="Top 10 Sustainable Cities", color='sustainability_score', color_continuous_scale='greens')
    st.plotly_chart(fig7, use_container_width=True)

# --- INTERACTIVE CONTROLS ---
st.subheader("📌 Explore Dataset")
if st.checkbox("Show Raw Data"):
    st.dataframe(df)

if st.checkbox("Show Summary Statistics"):
    st.write(df.describe())

st.markdown("---")
st.markdown("Made with ❤️ for GreenAI Sustainability Project")