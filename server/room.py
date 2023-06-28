from player import Player
import random, string, uuid

MAX_PLAYERS: int = 2

class Room:
    def __init__(self, host: Player):
        self.room_id: str = generate_id()
        self.players: list[uuid.UUID] = []
        self.locked: bool = False
        self.host: Player = host
    
    def isFull(self) -> bool:
        return len(self.players) == MAX_PLAYERS
    
    # @TODO: check if room exists
    def add_player(self, p_id: uuid.UUID) -> None or Exception:
        if self.isFull():
            raise Exception("Room is full")
        self.players.append(p_id)
    
    # @TODO: check if room exists
    def rm_player(self, p_id: uuid.UUID) -> None or Exception:
        if p_id not in self.players:
            raise Exception("Player not in room")
        for i in range(len(self.players)):
            if self.players[i].id == p_id:
                self.players.remove(i)
                break
             
    # @TODO: check if the player is the host, if true then return tr,else return false
    def check_if_host(self,p_id: uuid.UUID) -> bool:
        if (): # player is the host
            return True
        else:
            return False
        
    # @TODO: if the first input is the host, kick second player 
           
# @TODO: Check if code already exists
# Returns randomly generated alphanumeric string of length 6
def generate_id() -> str:
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
