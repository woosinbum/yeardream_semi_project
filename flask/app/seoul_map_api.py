from flask import Flask, render_template, Blueprint
map = Blueprint('map',__name__)

@map.route("/factor/map", methods=['GET'])
def map_page():
    return render_template('seoulMarker.html')
