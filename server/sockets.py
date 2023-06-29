import asyncio
import websockets
import json
import time

clients = set()

s = {
    "player_x": 1,
    "player_y": 1,
    "ball_x": 1,
    "ball_y": 1,
    "stroke": 1
}

async def server(websocket, path):
    clients.add(websocket)
    try:
        while True:
            await asyncio.sleep(0.01)
    except websockets.exceptions.ConnectionClosed:
        pass
    finally:
        clients.remove(websocket)

async def send_status_message():
    while True:
        if clients:
            message = json.dumps(s)
            await asyncio.gather(*(client.send(message) for client in clients))
        await asyncio.sleep(0.01)

start_server = websockets.serve(server, "localhost", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().create_task(send_status_message())
asyncio.get_event_loop().run_forever()