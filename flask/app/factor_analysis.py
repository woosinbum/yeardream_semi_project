from flask import Flask, render_template, Blueprint, request, jsonify   
from pymongo import MongoClient
factor = Blueprint('factor',__name__)

connection = MongoClient("mongodb+srv://user1:uZGuuMyRngM3izgG@cluster0.cu0c3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = connection.get_database('elice')
col = db.get_collection('sales_rate_gender')

@factor.route("/factor", methods=['GET'])
def factor_page():
    return render_template("factor_analysis.html")

#버튼에서 상권 별 업종 목록가져오는 api
@factor.route("/factor/list", methods=['POST'])
def factor_bring_data():
    value = request.form.get("code")
    query = {"상권_코드": int(value)}
    projection = {'_id':False}
    data = list(col.find(query, projection))
    return jsonify(data)





    # return jsonify(data)


@factor.route("/factor/map", methods=['GET'])
def map_page():
    return render_template("seoulMarker.html")
