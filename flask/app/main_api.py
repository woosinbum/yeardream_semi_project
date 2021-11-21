from typing import Mapping
from flask import Blueprint, render_template
main = Blueprint('main',__name__)


@main.route("/main")
def main_page():
    return render_template('index.html', type=업종)