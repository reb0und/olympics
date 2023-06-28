from flask import Flask, make_response, render_template, redirect, request, Response
from db import RoomClient
from session import SessionClient
from uuid import uuid4

app = Flask(__name__, static_folder='../web/static', template_folder='../web/static/')
room_client = RoomClient(0)
session_client = SessionClient(1)

def apply_headers(resp: Response) -> Response:
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Access-Control-Allow-Methods'] = 'GET'
    resp.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    resp.headers['Access-Control-Max-Age'] = '3600'
    resp.headers['Content-Type'] = 'text/html'
    return resp

@app.route('/', methods=['GET'])
def index():
    resp = make_response(render_template('index.html'))

    apply_headers(resp)
    
    resp.headers['Session-id'] = session_client.create_session(uuid4, request.remote_addr)

    return resp

@app.route('/room/', methods=['GET'])
def room():
    return redirect('/room/' + room_client.create_room(), 301)

# @app.route('/room/<room_id>', methods=['GET'])
# def room():
#     return render_template('room.html')

if __name__ == '__main__':
    app.run(debug=True, port=3000)