from flask import Flask,render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/test')
def test():
    return "this is for test"

@app.route('/new')
def new():
    return "new page apply2222"

if __name__ == '__main__':
    app.run('0.0.0.0', 5000, debug=True)
