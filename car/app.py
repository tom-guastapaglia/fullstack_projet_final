from flask import Flask, render_template, request, redirect, jsonify
from models import CarModel
from db import db, app
import json

@app.route('/car/create', methods=['POST'])
def create():
    data = json.loads(request.data)['data']
    if not data:
        return jsonify({"message": "No data found"})
    brand = data['brand']
    model = data['model']
    price = data['price']
    image = data['image']
    car = CarModel(brand, model, price, image)
    db.session.add(car)
    db.session.commit()
    return jsonify({"message": f"Car with id {car.id} create successfully !"})


@app.route('/car', methods=['GET'])
def RetrieveList():
    cars = CarModel.query.all()
    return jsonify(cars)


@app.route('/car/<int:id>', methods=['GET'])
def RetrieveEmployee(id):
    car = CarModel.query.get(id)
    if car:
        return jsonify(car)
    return jsonify({"message": f"Car with id={id} Doens't exist"})


@app.route('/car/update/<int:id>', methods=['POST'])
def update(id):
    car = CarModel.query.get(id)
    if car:
        data = json.loads(request.data)['data']
        if not data:
            return jsonify({"message": "No data found"})
        car.brand = data['brand'] if "brand" in data else car.brand
        car.model = data['model'] if "model" in data else car.model
        car.price = data['price'] if "price" in data else car.price
        car.image = data['image'] if "image" in data else car.image
        db.session.add(car)
        db.session.commit()
        return jsonify({"message": f"Car with id={id} updated"})
    return jsonify({"message": f"Car with id={id} Doens't exist"})


@app.route('/car/delete/<int:id>', methods=['GET'])
def delete(id):
    car = CarModel.query.get(id)
    if car:
        db.session.delete(car)
        db.session.commit()
        return jsonify({"message": f"Car with id={id} deleted"})
    return jsonify({"message": f"Car with id={id} Doesn't exist"})


app.run(host='localhost', port=80)
