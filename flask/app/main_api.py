
from flask import Blueprint, render_template, jsonify, request
from pymongo import MongoClient

main = Blueprint('main',__name__)
#mongoDb 연걸
connection = MongoClient("mongodb+srv://user1:uZGuuMyRngM3izgG@cluster0.cu0c3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = connection.get_database('elice')

#col불러오기
gender_rate = db.get_collection('sales_rate_gender')
age_rate =db.get_collection('sales_rate_age')
sales_info = db.get_collection('sales_info')
day_rate = db.get_collection('sales_rate_day')
market_col = db.get_collection('commercial_area')
average_sale_ratio = db.get_collection('sales_info_sales')
business_ratio = db.get_collection('sales_info_business_ratio_2021')
#트렌드데이터 생성함수
def make_label_data(list_data,col):
    lab=[]
    ratio=[]
    projection={'_id':False}
    col_list=list(col.find({},projection).limit(10))
    for i in col_list:
        lab.append(i.get('서비스_업종_코드_명'))
    for i in col_list:
        ratio.append(round(i.get('점포수_비율'),2))
    etc = 100-sum(ratio)
    lab.append('기타')
    ratio.append(etc)
    list_data.append(lab)
    list_data.append(ratio)

def make_data(list_data,column,column2,col):
    lab=[]
    ratio=[]
    projection={'_id':False}
    col_list=list(col.find({},projection))
    for i in col_list:
        lab.append(i.get(column))
    for i in col_list:
        ratio.append(round(i.get(column2),2))

    list_data.append(lab)
    list_data.append(ratio)

@main.route("/",methods=['GET'])
def main_page():
    data = \
        { 
        'highest_place':'상권',
        'highest_type': '수산물 판매',
        'highest_ratio_place':'상권',
        'highest_ratio_type':'조명용품',
        'sales': '20년 평균 매출',
        'last_sales': '20년 전 평균 매출',
        'closed_ratio':'20년 폐업률',
        'last_closed_ratio':'20년 전 폐업률',
        'high_rank':[
            {'type':'조명용품','ratio':'128.3%'},
            {'type':'의료기기','ratio':'111.9%'},
            {'type':'청과상','ratio':'82.7%'},
            {'type':'육류판매','ratio':'70.4%'},
            {'type':'가전제품','ratio':'63.4%'}],
        'low_rank':[
            {'type':'고시원','ratio':'-62.3%'},
            {'type':'노래방','ratio':'-39.0%'},
            {'type':'여관','ratio':'-35.3%'},
            {'type':'패스트푸드점','ratio':'-30.2%'},
            {'type':'네일숍','ratio':'-25.5%'}],
        }
    projection = {'_id':False}

    sales_top5 = list(sales_info.find({'기준_년_코드':2020},projection).sort('전년도비_매출_증감률',-1).limit(5))
    sales_low5 = list(sales_info.find({'기준_년_코드':2020},projection).sort('전년도비_매출_증감률',1).limit(5))

    market_lab = list(market_col.find({},projection))
    
    
    trend_data=[]
    make_label_data(trend_data,business_ratio)
  

    store_data=[]
    make_data(store_data,'기준_년_코드','점포수',average_sale_ratio)
    store_data[0].pop(0)
    store_data[1].pop(0)
    revenue_data=[]
    make_data(revenue_data,'기준_년_코드','연매출평균증감',average_sale_ratio)
    revenue_data[0].pop(0)
    revenue_data[1].pop(0)

    return render_template('index.html',
                            sales_top= sales_top5,
                            sales_low= sales_low5, 
                            data=data,
                            market=market_lab,
                            trend=trend_data,
                            store=store_data,
                            revenue=revenue_data)



@main.route("/market-name",methods=['POST'])
def market_name():
    service_code = request.form.get("code")
    print(service_code)
    
    return service_code


@main.route("/market-name/list", methods=['POST'])
def factor_bring_data():
    value = request.form.get("code")

    query = {"상권_코드": int(value)}        
    projection = {'_id':False}
    
    gender_data= list(gender_rate.find(query,projection))
    age_data = list(age_rate.find(query,projection))
    
    day_data = list(day_rate.find(query,projection))
    
    
    data = [gender_data,age_data,day_data]

    # data.append(gender_data)
    # data.append(age_data)
    # data.append(store)

    # print(gender_data)
    # print(age_data)
    # print(st)
    # print(data)

    return jsonify(data)

