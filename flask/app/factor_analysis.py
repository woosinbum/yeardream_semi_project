from flask import Flask, render_template, Blueprint, request, jsonify   
from pymongo import MongoClient
import json
factor = Blueprint('factor',__name__)

connection = MongoClient("mongodb+srv://user1:uZGuuMyRngM3izgG@cluster0.cu0c3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = connection.get_database('elice')
col=db.get_collection('corr_sales_job_pop')
facility=list(col.find({},{'_id':False}).sort('category',1))
label=[]
data=[]
new_data=[]
for i in facility:
    label.append(i.get('category'))
for i in facility:
    data.append(round(i.get('correlation'),2))
new_data.append(label)
new_data.append(data)   


@factor.route("/factor",methods=['GET'])
def factor_page():

    return render_template("factor_analysis.html",data=new_data)


@factor.route("/factor/map", methods=['GET'])
def map_page():
    return render_template("seoulMarker.html")


