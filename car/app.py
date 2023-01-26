from flask import Flask, render_template, request, redirect, jsonify
from models import CarModel
from db import db, app
import json


@app.route("/cars/create", methods=["POST"])
def create_car():
    data = json.loads(request.data)
    car = CarModel(name=data["name"], image=data["image"], price=data["price"])
    db.session.add(car)
    db.session.commit()
    return jsonify({"id": car.id})


@app.route("/cars", methods=["GET"])
def get_cars():
    cars = CarModel.query.all()
    return jsonify([{"id": car.id, "name": car.name, "image": car.image, "price": car.price} for car in cars])

@app.route("/cars/<int:id>", methods=["GET"])
def get_car(id):
    car = CarModel.query.filter_by(id=id).first()
    return jsonify({"id": car.id, "name": car.name, "image": car.image, "price": car.price})


@app.route('/cars/<int:id>/update',methods = ['GET','POST'])
def update_car(id):
    car = CarModel.query.filter_by(id=id).first()
    data = json.loads(request.data)
    car.name = data["name"]
    car.image = data["image"]
    car.price = data["price"]
    db.session.commit()
    return jsonify({"id": car.id, "name": car.name, "image": car.image, "price": car.price})

@app.route("/cars/<int:id>", methods=["DELETE"])
def delete_car(id):
    car = CarModel.query.filter_by(id=id).first()
    db.session.delete(car)
    db.session.commit()
    return jsonify({"id": car.id, "name": car.name, "image": car.image, "price": car.price})




@app.route("/", methods=["GET"])
def hello():
    return jsonify({"Hello": "World"})




app.run(host='localhost', port=5000)

