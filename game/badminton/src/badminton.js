
let player1Score = 0;
let player2Sscore = 0;
let player1Sets = 0;
let player2Sets = 0;
// let player1 = new player();
// let player2 = new player();

let player3 = new Player("idk",10,1,1);

let playerarr = [];

let response = "";
const sleep = ms => new Promise(res => setTimeout(res, ms));

async function gamesim(){

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
            let g = await game();
            if (g == 1) {
                player1Score += 1;
            } else {
                player2Score += 1;
            }
        } 
    }

}

async function game(){
    document.write("Press w or x"); 
    
    while (response == ""){
        await sleep();
    }

    document.write('selected serve '+response);


    while(player1.energy >= 0 && player2.energy >= 0){

    }
    if (player1.energy < 0) {
        return 2; 
    }
    return 1
}

function serve() {
// return location
    if (actkey == 'ArrowLeft'){
        player1y -= 3;
        player.style.transform = "rotate(-50deg)";
        p1angle = -50;
    }
    if (actkey == 'ArrowRight'){
        player1y += 3;
        player.style.transform = "rotate(230deg)";
        p1angle = 230;
    }
    if (actkey == 'ArrowUp'){
        player1y -= 3;
        player.style.transform = "rotate(-50deg)";
        p1angle = -50;
    }

}

function smash(){

}

function drive(){

}

function lift(){

}

function drop(){

}

function clear(){

}


game();

(async () => {
    window.addEventListener("keydown", function(event) {
    
      if (event.defaultPrevented) {
        return;
      }
    
    
      
      let actkey = event.code.replace('Key','');

      if (actkey == 'W'){
        response = 'W';
      }

      if (actkey == 'X'){
        response = 'X';
      }
    
    }, true);

})(); 

