from flask import Blueprint,jsonify,render_template

bp = Blueprint('bp',__name__,template_folder='templates')

@bp.route('/')
def home():
    return render_template('index.html')

@bp.route('/first',methods=['GET'])
def first_route():
    return jsonify('first page')

@bp.route('/second',methods=['GET'])
def second_route():
    return jsonify('second page')

