# Backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        print("Received data:", data)
        # Replace this dummy logic with your actual ML model inference.
        prediction = "Prediction: " + str(data.get('data', ''))
        return jsonify({'prediction': prediction})
    except Exception as e:
        print("Error during prediction:", e)
        return jsonify({'error': 'Internal Server Error'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
