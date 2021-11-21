from flask import Flask, render_template
from main_api import main

app = Flask(__name__)

app.register_blueprint

if __name__ == '__main__':
    app.run(debug=True)