from flask import Blueprint, render_template
main = Blueprint('main',__name__)

@main.route("/main")
def main_page(methods=['GET']):
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

    return render_template('index.html', data=data)