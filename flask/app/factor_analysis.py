from flask import Flask, render_template, Blueprint, request, jsonify   
from pymongo import MongoClient
factor = Blueprint('factor',__name__)

connection = MongoClient("mongodb+srv://user1:uZGuuMyRngM3izgG@cluster0.cu0c3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = connection.get_database('elice')
col = db.get_collection('sales_rate_gender')

@factor.route("/factor", methods=['GET'])
def factor_page():
    return render_template("factor_analysis.html")

@factor.route("/factor/get", methods=["POST"])
def factor_get_data():
    value = request.form.get("name")
    print(value)
    
    query = {"상권_코드": int(value)}
    projection = {'여성_매출_비율':True, '남성_매출_비율':True, '상권_코드':True}
    data = list(col.find(query, projection))
    
    

    return 



    # return jsonify(data)
