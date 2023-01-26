from flask_sqlalchemy import SQLAlchemy
from dataclasses import dataclass

db = SQLAlchemy()

class CarModel(db.Model):
    __tablename__ = "car"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250))
    price = db.Column(db.Float())
    image = db.Column(db.String(3000))

    def __init__(self, name, image, price):
        self.name = name
        self.image = image
        self.price = price


    def __repr__(self):
        return f"Car(name={self.name}, image={self.image}, price={self.price})"