from flask import Flask,render_template,request,redirect,jsonify
from models import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://admin:admin@db:3306/lesson'

db.init_app(app)
if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        print("Flask table created")

