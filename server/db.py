from redis import Redis
from room import generate_id
from uuid import UUID, uuid4
import json

entity = {
    "host_id": uuid4(),
}

class RoomClient:
    def __init__(self, db: int) -> None:
        self.client = Redis(host='localhost', port=6379, db=db)

    def create_room(self, host: UUID) -> str:
        id = generate_id()
        self.client.set(str(id), json.dumps({
            "host_id": str(host),
            "locked": False,
            "players": [str(host)]
        }))
        return id

    def get_room(self, room_id: str) -> dict:
        return json.loads(self.client.get(room_id))

    def update_host(self, room_id: str, host: UUID) -> None:
        room = self.get_room(room_id)
        self.client.set(room_id, json.dumps({
            "host_id": str(host),
            "locked": room["locked"],
            "players": room["players"]
        }))

    def update_lock(self, room_id: str, lock: bool) -> None:
        room = self.get_room(room_id)
        self.client.set(room_id, json.dumps({
            "host_id": room["host_id"],
            "locked": lock,
            "players": room["players"]
        }))