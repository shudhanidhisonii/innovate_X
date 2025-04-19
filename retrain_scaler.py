import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import StandardScaler
import joblib

# Load dataset
df = pd.read_csv("carbonemission.csv")

# Define features and target using correct column names
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
target = 'normalized_co2'

# Drop rows with missing values in the features or target
df = df.dropna(subset=features + [target])

# Feature matrix and target
X = df[features]
y = df[target]

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Standardize features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)

# Train the model
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train_scaled, y_train)

# Save the model and scaler
joblib.dump(model, "greenai_carbon_model.pkl")
joblib.dump(scaler, "scaler.pkl")

print("✅ Model and scaler saved successfully!")
