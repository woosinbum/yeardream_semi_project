from flask import Flask,render_template
from app.main_api import main
from app.factor_analysis import factor

app = Flask(__name__)

app.register_blueprint(main)
app.register_blueprint(factor)

if __name__ == '__main__':
    app.run()
