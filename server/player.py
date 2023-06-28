from uuid import UUID, uuid4

class Player:
    def __init__(self, name: str):
        self.id: UUID = uuid4()
        self.name: str = name
        self.points: int = 0

            