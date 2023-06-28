from flask import Flask, render_template

app = Flask(__name__, static_folder='../web/static', template_folder='../web/static/')

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True, port=3000)
