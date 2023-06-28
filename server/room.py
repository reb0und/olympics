from player import Player
import random, string

MAX_PLAYERS = 4

class Room:
    def __init__(self, players: list[Player]):
        self.players: list[Player] = players
        room_id: str = ""

# @TODO: Check if code already exists

'''
Returns randomly generated alphanumeric string of length 6

'''
def generate_id() -> str:
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
print(generate_id())