from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import json
import models as models

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///flask_crud.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
app.run(host='car', port=5001)


@app.route("/", methods=["GET"])
def hello():
    return jsonify({"Hello": "World"}) 

@app.route("/add", methods=['POST'])
def add():
    data = json.loads(request.data)
    return jsonify(data["a"] + data["b"])