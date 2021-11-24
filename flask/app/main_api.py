from flask import Blueprint, render_template
from pymongo import MongoClient

main = Blueprint('main',__name__)

connection = MongoClient("mongodb+srv://user1:uZGuuMyRngM3izgG@cluster0.cu0c3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = connection.get_database('elice')
col = db.get_collection('sales_info')
query = {"$and":[
    {'전년도비_매출_증감률': {"$ne": 'nan'}}, 
    {'기준_년_코드': {'$eq': 2020}}]
}
sales_ratio_cursor =col.find(query).sort('전년도비_매출_증감률',-1).limit(5)

@main.route("/main",methods=['GET'])
def main_page():
    data = \
        { 
        'highest_place':'상권',
        'highest_type': '업종',
        'highest_ratio_place':'상권',
        'highest_ratio_type':'업종',
        'sales': '20년 평균 매출',
        'last_sales': '20년 전 평균 매출',
        'closed_ratio':'20년 폐업률',
        'last_closed_ratio':'20년 전 폐업률',
        'high_rank':[
            {'type':'abcd','ratio':'sdfa'},
            {'type':'abcd','ratio':'sdfa'},
            {'type':'abcd','ratio':'sdfa'},
            {'type':'abcd','ratio':'sdfa'},
            {'type':'abcd','ratio':'sdfa'},
            {'type':'abcd','ratio':'sdfa'}],
        'low_rank':[
            {'type':'abcd','ratio':'sdfa'},
            {'type':'abcd','ratio':'sdfa'},
            {'type':'abcd','ratio':'sdfa'},
            {'type':'abcd','ratio':'sdfa'},
            {'type':'abcd','ratio':'sdfa'},
            {'type':'abcd','ratio':'sdfa'}],
        }
    sales_data= list(sales_ratio_cursor)
    return render_template('index.html', data=data,data2=sales_data)

