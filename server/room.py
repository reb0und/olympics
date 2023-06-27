from flask import Flask, render_template

@app.route('/')
def home():
    return flask.render_template('home.html')