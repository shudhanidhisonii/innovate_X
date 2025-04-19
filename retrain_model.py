import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
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

# Split dataset into training and testing sets
X = df[features]
y = df[target]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a Random Forest model
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Save the model
joblib.dump(model, "greenai_carbon_model.pkl")
print("✅ Model retrained and saved as greenai_carbon_model.pkl")
