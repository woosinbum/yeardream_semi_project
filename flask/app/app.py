from flask import Flask, render_template
from main_api import main
from factor_analysis import factor
from seoul_map_api import map

app = Flask(__name__)

app.register_blueprint(main)
app.register_blueprint(factor)
app.register_blueprint(map)

if __name__ == '__main__':
    app.run(debug=True)