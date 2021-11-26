from flask import Flask, render_template, Blueprint, request, jsonify   
from pymongo import MongoClient
factor = Blueprint('factor',__name__)

connection = MongoClient("mongodb+srv://user1:uZGuuMyRngM3izgG@cluster0.cu0c3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = connection.get_database('elice')
gender_rate = db.get_collection('sales_rate_gender')
age_rate =db.get_collection('sales_rate_age')
sales_info = db.get_collection('sales_info')
day_rate = db.get_collection('sales_rate_day')
market_data = db.get_collection('commercial_area')

@factor.route("/factor", methods=['GET'])
def factor_page():
    return render_template("factor_analysis.html")

#버튼에서 상권 별 업종 목록가져오는 api
@factor.route("/factor/list", methods=['POST'])
def factor_bring_data():
    value = request.form.get("code")

    query = {"상권_코드": int(value)}
    projection = {'_id':False}
    projection2 = {'_id':False,'전년도비_매출_증감':False,'전년도비_매출_증감률':False,'전년도비_점포수_증감':False,'전년도비_점포수_증감률':False}
    gender_data= list(gender_rate.find(query,projection))
    age_data = list(age_rate.find(query,projection))
    store_data=list(sales_info.find(query,projection2))
    day_data = list(day_rate.find(query,projection))
    
    data = [gender_data,age_data,day_data,store_data]

    # data.append(gender_data)
    # data.append(age_data)
    # data.append(store)

    # print(gender_data)
    # print(age_data)
    # print(st)
    # print(data)

    return jsonify(data)





    # return jsonify(data)


@factor.route("/factor/map", methods=['GET'])
def map_page():
    return render_template("seoulMarker.html")


@factor.route("/factor/market-name",methods=['POST'])
def market_name():
    projection = {'_id':False}
    data =list(market_data.find({},projection))
    
    return jsonify(data)
