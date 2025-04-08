// pages/src/App.js
import React, { useState } from 'react';
import './App.css';
import { getPrediction } from './api';

function App() {
  const [inputData, setInputData] = useState('');
  const [prediction, setPrediction] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    setLoading(true);
    try {
      const result = await getPrediction(inputData);
      setPrediction(result.prediction);
    } catch (error) {
      console.error('Error fetching prediction:', error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ML Prediction App</h1>
        <input
          type="text"
          placeholder="Enter input data"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button onClick={handlePredict} disabled={loading}>
          {loading ? 'Loading...' : 'Get Prediction'}
        </button>
        {prediction && (
          <div>
            <h2>Prediction:</h2>
            <p>{prediction}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
