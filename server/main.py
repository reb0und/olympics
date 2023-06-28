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
def index() -> Response:
    r = make_response(render_template('index.html'))

    apply_headers(r)
    
    r.headers['Session-id'] = session_client.create_session(uuid4, request.remote_addr)

    return r

@app.route('/room/', methods=['GET'])
def room() -> Response:
    if 'Session-Id' not in request.headers:
        return redirect('/', 301)
    elif session_client.get_session(request.headers['Session-Id']):
        return redirect('/room/' + room_client.create_room(), 301)
    else:
        return redirect('/', 301)

@app.route('/room/lock', methods=['POST'])
def lock_room() -> Response:
    if 'Session-Id' not in request.headers:
        return redirect('/', 403)
    elif session_client.get_session(request.headers['Session-Id']):
        if room['host_id'] == session_client.get_session(request.headers['Session-id'])["Session-Id"]:
            room_client.lock_room(request.headers['Session-Id'])
            return Response(status=200)
        else:
            return Response(status=403)
    else:
        return redirect('/', 301)
    
@app.route('/room/badminton', methods = ['GET'])
def badminton() -> Response:
    return make_response(render_template('../'), 200)
    if 'Session-Id' not in request.headers:
        return redirect('/', 403)
    elif session_client.get_session(request.headers['Session-Id']):
        return make_response(render_template('../../game/badminton/src/badminton.html'), 200)
    else:
        return redirect('/', 301)

if __name__ == '__main__':
    app.run(debug=True, port=3000)