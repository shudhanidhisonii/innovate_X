import streamlit as st
import pandas as pd
import requests
import plotly.express as px
import plotly.graph_objects as go
from datetime import datetime

# --------------------------------
# 🔐 API Keys
# --------------------------------
OWM_API_KEY = "1c2c909bccd51e022dac952225219955"

# --------------------------------
# 📍 Indian Cities
# --------------------------------
city_map = {
    "Delhi": [28.6139, 77.2090],
    "Mumbai": [19.0760, 72.8777],
    "Kolkata": [22.5726, 88.3639],
    "Chennai": [13.0827, 80.2707],
    "Bengaluru": [12.9716, 77.5946],
    "Hyderabad": [17.3850, 78.4867],
    "Ahmedabad": [23.0225, 72.5714],
    "Pune": [18.5204, 73.8567],
    "Jaipur": [26.9124, 75.7873],
    "Lucknow": [26.8467, 80.9462]
}

# --------------------------------
# 📦 Fetch Current Weather
# --------------------------------
def get_weather(city):
    lat, lon = city_map[city]
    url = "https://api.openweathermap.org/data/2.5/weather"
    params = {"lat": lat, "lon": lon, "appid": OWM_API_KEY, "units": "metric"}
    try:
        res = requests.get(url, params=params)
        res.raise_for_status()
        return res.json()
    except Exception as e:
        st.error(f"Error fetching weather: {e}")
        return None

# --------------------------------
# 🚀 Streamlit App
# --------------------------------
st.set_page_config(page_title="India Weather", layout="wide")
st.title("🌧️ Real-time Weather for Indian Cities")

city = st.selectbox("Select a city", list(city_map.keys()))

if st.button("Get Weather"):
    with st.spinner("Fetching data..."):
        data = get_weather(city)

    if data:
        main = data["main"]
        wind = data["wind"]
        weather = data["weather"][0]
        coord = data["coord"]

        temp = main["temp"]
        humidity = main["humidity"]
        pressure = main["pressure"]
        wind_speed = wind["speed"]
        wind_deg = wind.get("deg", 0)
        description = weather["description"].title()

        # Sunrise & Sunset
        sunrise = datetime.fromtimestamp(data["sys"]["sunrise"]).strftime("%H:%M:%S")
        sunset = datetime.fromtimestamp(data["sys"]["sunset"]).strftime("%H:%M:%S")

        st.markdown(f"### 📍 Weather in {city}")
        col1, col2, col3 = st.columns(3)
        col1.metric("Temperature", f"{temp} °C", f"Feels like {main['feels_like']} °C")
        col2.metric("Humidity", f"{humidity} %")
        col3.metric("Wind Speed", f"{wind_speed} m/s")

        st.markdown(f"**Condition**: {description}  |  **🌄 Sunrise**: {sunrise}  |  **🌇 Sunset**: {sunset}")

        # Metric Bar
        metric_df = pd.DataFrame({
            "Metric": ["Temperature", "Humidity", "Pressure", "Wind Speed"],
            "Value": [temp, humidity, pressure, wind_speed]
        })
        st.plotly_chart(px.bar(metric_df, x="Metric", y="Value", title="🌡️ Weather Metrics"))

        # Pie Chart
        pie_df = pd.DataFrame({
            "Condition": ["Humidity", "Dry Air"],
            "Value": [humidity, 100 - humidity]
        })
        st.plotly_chart(px.pie(pie_df, names="Condition", values="Value", title="Humidity vs Dry Air"))

        # Wind Compass
        st.plotly_chart(go.Figure(go.Indicator(
            mode="gauge+number",
            value=wind_deg,
            title={"text": "Wind Direction (°)"},
            gauge={"axis": {"range": [0, 360]}}
        )))

        # Location Map
        map_df = pd.DataFrame([{"City": city, "Latitude": coord["lat"], "Longitude": coord["lon"], "Temperature": temp}])
        st.plotly_chart(px.scatter_mapbox(
            map_df,
            lat="Latitude",
            lon="Longitude",
            size="Temperature",
            hover_name="City",
            color="Temperature",
            zoom=4,
            mapbox_style="open-street-map",
            title="City Location & Temperature"
        ), use_container_width=True)

# Footer
st.markdown("---")
st.markdown("Data: [OpenWeatherMap](https://openweathermap.org/api) | Built with ❤️ using Streamlit")
