from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Autoriser les requêtes depuis React

@app.route('/')
def home():
    return jsonify({"message": "Bienvenue sur le backend Flask !"})

@app.route('/api/data')
def get_data():
    return jsonify({"data": "Ceci est un exemple de données envoyées par Flask"})

if __name__ == '__main__':
    app.run(debug=True)


