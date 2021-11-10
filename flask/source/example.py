from flask import Blueprint,jsonify

bp = Blueprint('bp',__name__)

@bp.route('/first',methods=['GET'])
def first_route():
    return jsonify('first page')

@bp.route('/second',methods=['GET'])
def second_route():
    return jsonify('second page')
