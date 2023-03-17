from flask_sqlalchemy import SQLAlchemy
from dataclasses import dataclass

db = SQLAlchemy()

@dataclass
class CarModel(db.Model):
    __tablename__ = "car"
    id: int
    brand: str
    model: str
    price: float
    image: str

    id = db.Column(db.Integer, primary_key=True)
    brand = db.Column(db.String(150))
    model = db.Column(db.String(150))
    price = db.Column(db.Float())
    image = db.Column(db.String(3000))

    def __init__(self,brand,model,price,image):
        self.brand = brand
        self.model = model
        self.price = price
        self.image = image

    def __repr__(self):
        return f"{self.brand} {self.model}"
