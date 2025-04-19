import pandas as pd
import joblib
from sklearn.preprocessing import StandardScaler

# Load dataset
df = pd.read_csv("carbonemission.csv")

# Define the same features used for the model
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

# Drop rows with missing values
df = df.dropna(subset=features)

# Extract feature data
X = df[features]

# Fit and save scaler
scaler = StandardScaler()
scaler.fit(X)
joblib.dump(scaler, "scaler.pkl")
print("✅ Scaler saved as scaler.pkl")
