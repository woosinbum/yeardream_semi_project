from flask import Flask,render_template
# from app.main_api import main
# from app.factor_analysis import factor
# from app.extra_api import extra

from main_api import main
from factor_analysis import factor
from extra_api import extra

app = Flask(__name__)

app.register_blueprint(main)
app.register_blueprint(factor)
app.register_blueprint(extra)

if __name__ == '__main__':
    app.run()
