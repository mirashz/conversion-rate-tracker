import React from 'react';
import ConversionRateChart from './components/conversionChart/ConversionRateChart';

const App: React.FC = () => {
  return (
    <div className="App">
       <h1>Conversion Rate Tracker</h1>
       <ConversionRateChart />
    </div>
  );
};

export default App;
