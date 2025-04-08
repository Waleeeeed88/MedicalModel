// pages/src/api.js
export async function getPrediction(inputData) {
  const response = await fetch('http://localhost:5000/predict', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: inputData }),
  });
  return response.json();
}
