from redis import Redis
from uuid import UUID, uuid4
import json

class SessionClient:
    def __init__(self, db: int) -> None:
        self.client = Redis(host='localhost', port=6379, db=db)

    def create_session(self, ip: str) -> str:
        id = uuid4()
        self.client.set(str(id), json.dumps({
            "session_id": str(id),
            "ip": ip,
        }))
        self.client.expire(str(id), 60 * 60 * 24)

        return str(id)
    
    def get_session(self, session_id: str) -> str:
        return str(self.client.get(session_id))
