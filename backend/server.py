from flask import Flask, request
from flask_cors import CORS
import sqlite3
# . .venv/bin/activate
# flask --app server run --debug --port 5001
app = Flask(__name__)
CORS(app)
machine_dict = {
    1: {
        "id":1,
        "items": [{
            "name": "Doritos",
            "stock": 8,
            "price": 3,
            "id": 1,
            "icon": '/icons/chips-1.png'
        }, {
            "name": "Ruffles",
            "stock": 0,
            "price": 1.50,
            "id": 2,
            "icon": '/icons/chips-2.png'
        }, {
            "name": "Sneakers",
            "stock": 3,
            "price": 2.29,
            "id": 3,
            "icon": '/icons/chips-3.png'
        }, {
            "name": "Pop-Tarts",
            "stock": 9,
            "price": 1.29,
            "id": 4,
            "icon": '/icons/chips-3.png'
        }, {
            "name": "SunChips",
            "stock": 5,
            "price": 1.29,
            "id": 5,
            "icon": '/icons/chips-3.png'
        }, {
            "name": "Granola Bars",
            "stock": 2,
            "price": 1.29,
            "id": 6,
            "icon": '/icons/chips-3.png'
        }, {
            "name": "Cookies",
            "stock": 2,
            "price": 1.29,
            "id": 7,
            "icon": '/icons/energy-bar.png'
        }, {
            "name": "Cheetos",
            "stock": 10,
            "price": 1.29,
            "id": 8,
            "icon": '/icons/energy-bar.png'
        }, {
            "name": "Ruffles",
            "stock": 8,
            "price": 1.29,
            "id": 9,
            "icon": '/icons/energy-bar.png'
        }, ],
        "theme": {
            "primary_color": "#444"
        },
        "properties":{
            "location":"1234 Foo st., Anaheim",
            "Status":"Operational"
        }
    },
    2: {
        "id":2,
        "items": [{
            "name": "Gatorade",
            "stock": 8,
            "price": 3,
            "id": 10,
            "icon": '/icons/energy-drink.png'
        }, {
            "name": "Iced Tea",
            "stock": 3,
            "price": 2,
            "id": 11,
            "icon": '/icons/energy-drink.png'
        }, {
            "name": "Monster",
            "stock": 7,
            "price": 1.29,
            "id": 12,
            "icon": '/icons/energy-drink.png'
        }, {
            "name": "Water",
            "stock": 10,
            "price": 1.29,
            "id": 13,
            "icon": '/icons/soda-1.png'
        }, {
            "name": "Sprite",
            "stock": 10,
            "price": 1.50,
            "id": 14,
            "icon": '/icons/soda-1.png'
        }, {
            "name": "Lemonade",
            "stock": 10,
            "price": 1.29,
            "id": 15,
            "icon": '/icons/soda-1.png'
        }],
        "theme": {
            "primary_color": "#33c"
        }
    }
}


@app.route("/machine/<machine_id>", methods=['GET'])
def machine(machine_id):
    return machine_dict[int(machine_id)]

@app.route("/machine", methods=['GET'])
def get_machine_ids():
    return list(machine_dict.keys())

@app.route('/transaction', methods=['POST'])
def process_transaction():
    print(request.args['item'])
    # item=request.args['item']
    # payment_type = request.args['payment_type']
    # cost = item.cost
    # return (item.name,item.cost)
    return "HELLO"

# @app.route('/transaction', methods=['GET'])
# def get_all_transactions():
#     return []

# @app.route('/restocker/login')
# def login_restocer():
#     return ""

# if __name__ == '__main__':
#     app.run(port=5000)
