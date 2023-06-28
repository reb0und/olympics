
let player1Score = 0;
let player2Sscore = 0;
let player1Sets = 0;
let player2Sets = 0;
let player1 = new player();
let player2 = new player();

function gamesim(){

    while (player1Sets !== 2 && player2Sets !== 2) {
        if (((player1Score - player2Score) > 1) && (player1Score > 20)) {
            player1Score = 0;
            player2Score = 0;
            player1Sets += 1;
        } else if (((player2Score - player1Score) > 1) && (player2Score > 20)) {
            player1Score = 0;
            player2Score = 0;
            player2Sets += 1;
        }

        while (Math.abs(player1Score - player2Score) < 2 || (player2Score < 21 && player1Score < 21)) {
            if (game() == 1) {
                player1Score += 1;
            } else {
                player2Score += 1;
            }
        } 
    }

}

function game(){
    serve
    while(player1.energy >= 0 && player2.energy >= 0){

    }
    if (player1.energy < 0) {
        return 2; 
    }
    return 1
}

function serve{

}

function smash{

}

function drive{

}

function lift{

}

function drop{

}

function clear{

}


