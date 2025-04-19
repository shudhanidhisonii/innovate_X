import React from 'react';

import CardComponent from './CardComponent';  // Import CardComponent
import SustainabilityExplorer from './SustainabilityExplorer';
import ParticlesComponent from './ParticlesComponent';


function App() {
  return (
    <div className="App">
    <ParticlesComponent/>
      <CardComponent />
      <SustainabilityExplorer />
    </div>
  );
}

export default App;