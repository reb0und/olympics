
let player1Score = 0;
let player2Sscore = 0;
let player1Sets = 0;
let player2Sets = 0;
// let server = player1
// let player1 = new player();
// let player2 = new player();

// let player3 = new Player("idk",10,1,1);

let hit = new Audio("../assets/sfx/hit.mp4");
let hit2 = new Audio("../assets/sfx/hit.mp4");

let playerarr = [];

let notif1 = document.getElementById('notif');

let scoredisp = document.getElementById('score');

scoredisp.textContent = "You: 0 • Opponent: 0";

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
    //document.write("Press w or x"); 
    
    while (response == ""){
        await sleep();
    }

    //document.write('selected serve '+response);


    while(player1.energy >= 0 && player2.energy >= 0){

    }
    if (player1.energy < 0) {
        return 2; 
    }
    return 1
}

// function serve() {
// // return location
//     if (actkey == 'ArrowLeft'){
//         player1y -= 3;
//         player.style.transform = "rotate(-50deg)";
//         p1angle = -50;
//     }
//     if (actkey == 'ArrowRight'){
//         player1y += 3;
//         player.style.transform = "rotate(230deg)";
//         p1angle = 230;
//     }
//     if (actkey == 'ArrowUp'){
//         player1y -= 3;
//         player.style.transform = "rotate(-50deg)";
//         p1angle = -50;
//     }

// }

function jump(){
    jumpy = 0;
    vj = -4;
}

function jumpother(){
    jumpyother = 0;
    vjother = -4;
}

// function getvs(x,y, currentx, currenty){ // the destination coordinates

// }


// each of these types of shots will set the velocities to certain things
function smash(s){
    jump();
    bdx = -0.25*s;
    bdy = 0.15;
    notif_long("Smash");
}

function smashserve(s){
    bally -= 20;

    if (s == 1){
        jumpother();  
    } else {
        jump();
    }

    bdx = 0.15*s;
    bdy = 0.05;
    notif_long("Smash");
}

function underhandserve(s){

    bally -= 20;

    bdx = 0.15*s;
    bdy = -0.1;
    notif("Clear");
}

function drive(s){
    bdx = -0.25*s;
    bdy = 0.1;
    notif("Drive");
}

function lift(s){
    bdx = -0.25*s;
    bdy = -0.1;
    notif("Lift");
}


function drop(s){
    bdx = -0.25*s;
    bdy = 0.05;
    notif("Drop");
}

function clear(s){
    bdx = -0.05*s;
    bdy = -0.25;
    notif("Clear");
}


// function hit{

// }

// function serve{
    
// }

let player = document.getElementById('player');
let player2 = document.getElementById('player2');

let lasthit = "";
let lasthitother = "";

let serve = "";

let court = document.getElementById('court');
let ball = document.getElementById('ball');

let playerh = player.offsetHeight;
let ballwidth = ball.offsetWidth;

let cwidth = court.offsetWidth;
let cstart = court.offsetLeft;
let cheight = court.offsetHeight;




player.style.left = '100px';


let player1x = 80;
let player1y = 50;
let playerdx = 0;
let playerdy = 0;

let p1angle = -90;
let p2angle = 90;
let hittime = null;
let hitside = "";

let player2x = 10;
let player2y = 30;

let jumpy = 0;
let vj = 0;

let jumpyother = 0;
let vjother = 0;

let ballx = 20;
let bally = 50;
let ballz = 10;
let ballangle = 0;

let bdx = 0.15;
let bdy = -0.2;
let bdz = -0.05;

let bay = 1;
let baz = 1;

function overlap(object1, object2){

    // basically yk the corners
    // if the corners are contained in others

    let o1corners = [[object1.offsetLeft, object1.offsetTop],[object1.offsetLeft+object1.offsetWidth, object1.offsetTop], [object1.offsetLeft, object1.offsetTop+object1.offsetHeight], [object1.offsetLeft+object1.offsetWidth, object1.offsetTop+object1.offsetHeight]]; 
   
    let o2 = [object2.offsetLeft, object2.offsetLeft+object2.offsetWidth, object2.offsetTop, object2.offsetTop+object2.offsetHeight]; 

    let i = 0;

    while (i < 4){
        let mpx = o1corners[i][0];
        let mpy = o1corners[i][1];
        if (mpx > o2[0] && mpx < o2[1] && mpy > o2[2] && mpy < o2[3]){
            return true;
        }
        i += 1;
    }

    return false
}

function overlap_strict(object1, object2){

    let o1center = [object1.offsetLeft+object1.offsetWidth/2, object1.offsetTop+object1.offsetHeight/2];

    let o2center = [object2.offsetLeft+object2.offsetWidth/2, object2.offsetTop+object2.offsetHeight/2];

    let dist = Math.sqrt((o1center[0]-o2center[0])*(o1center[0]-o2center[0])+(o1center[1]-o2center[1])*(o1center[1]-o2center[1]));

    return dist < window.innerWidth/100;
}


function overlap_slight(object1, object2){

    // basically it is within the line of the x

    let okx = Math.abs((object1.offsetLeft+object1.offsetWidth/2)-(object2.offsetLeft+object2.offsetWidth/2)) < 10;

    let oky = Math.abs((object1.offsetTop+object1.offsetHeight/2)-(object2.offsetTop+object2.offsetHeight/2)) < 33;

    //and decently close for the y too

    return okx && oky;
}


async function notif(txt){
    let i = 100;
    let opac = 0;

    notif1.textContent = txt;

    notif1.style.left = (window.innerWidth/2-notif.offsetWidth)+"px";

    while (i > -100){

        notif1.style.opacity = opac/100;
        notif1.style.marginTop = i+"px";

        i -= 1;
        opac += 1
        await sleep();
    }
}



async function notif_long(txt){
    let i = 100;
    let opac = 0;

    notif1.textContent = txt;

    while (i > -200){

        notif1.style.opacity = opac/100;

        if (i > 0){
            notif1.style.marginTop = i+"px";
        } else if (i < -100){
            notif1.style.marginTop = (i+100)+"px";
        }

        i -= 1;
        opac += 1
        await sleep();
    }
}

function zeroize_negative(i){
    if (i < 0){
        return i;
    } else {
        return 0;
    }
}

// @DOMINIC if you want to call this with the arguments every time it receives data
function receivemovement(playerx, playery, stroke){
    player2x = playerx;
    player2y = playery;
    
    let movearr = ['A','S','D','F','G'];

    lasthitother = movearr[stroke];
}

// @DOMINIC call this to get the data you want to send
function getsendmovement(){
    let movearr = ['A','S','D','F','G'];

    return [player1x, player1y, movearr.indexOf(lasthit)];
}

function render(){
    // top view
    player.style.left = (player1x/100*cwidth-player.offsetWidth/2+cstart)+'px';
    player.style.top = ((player1y+zeroize_negative(jumpy))/100*cheight-player.offsetHeight/2)+'px'

    player2.style.left = (player2x/100*cwidth-player.offsetWidth/2+cstart)+'px';
    player2.style.top = ((player2y+zeroize_negative(jumpyother))/100*cheight-player.offsetHeight/2)+'px'
    
    ball.style.left = (ballx/100*cwidth-player.offsetWidth/2+cstart)+'px';
    ball.style.top = (bally/100*cheight-player.offsetHeight/2)+'px'


    // for the side view

    // player3.style.left = (player1x/100*cwidth-player.offsetWidth/2+cstart)+'px';
    // player3.style.width = 7*player1y/100+"%";
    // player3.style.top = (0.5*sheight-player.offsetHeight/2+sstart+50)+'px'

    
    // player4.style.left = (player2x/100*cwidth-player.offsetWidth/2+cstart+50)+'px';
    // player4.style.top = (0.5*sheight-player.offsetHeight/2+sstart)+'px'
    // player4.style.width = 7*player2y/100+"%";


    // ball2.style.left = (ballx/100*cwidth-player.offsetWidth/2+cstart)+'px';
    // ball2.style.top = (ballz/100*cheight-player.offsetHeight/2+cstart)+'px'
    // ball2.style.width = 2*bally/100+"%";
}


(async () => {
    notif_long("Press W or X to serve")

    while (serve == ""){
        render();

        await sleep();
    }

    if (serve == 'W'){
        smashserve(1);
    }

    if (serve == 'X'){
        underhandserve(1);
    }

    while (true){
        
        // velocity affecting position
        ballx += bdx;
        bally += bdy;
        ballz += bdz;

        if (Math.abs(vj) < 0.05 && Math.abs(jumpy) > 0){

        } else {
            jumpy += vj;
        }

        if (Math.abs(vjother) < 0.05 && Math.abs(jumpyother) > 0){

        } else {
            jumpyother += vjother;
        }

        if (hit.currentTime > 3){
            hit.pause();
        }

        if (hit2.currentTime > 23.5){
            hit2.pause();
        }


        if (vj < 0.05){
            vj += 0.5;
        }

        if (vjother < 0.05){
            vjother += 0.5;
        }

        bdy += bay/2000;

        if (ballangle > -30){
            ballangle -= 0.1;
        }

        if (ballangle < -30){
            ballangle += 1;
        }

        ball.style.transform = "rotate("+ballangle+"deg)";

        if (playerdx > 0){
            playerdx -= 0.1;
        }
        if (playerdx < 0){
            playerdx += 0.1;
        }

        if (overlap(ball, player)){
            // alert("HIT");

            // check if a move was made

            if (lasthit == ""){
                notif("you lost");


            } else {
                //alert("Hit type "+lasthit);

                hit.currentTime = 2.2;
                hit.play();

                if (lasthit == 'A'){
                    smash(1);
                }
                if (lasthit == 'S'){
                    drive(1);
                }
                if (lasthit == 'D'){
                    lift(1);
                }
                if (lasthit == 'F'){
                    drop(1);
                }
                if (lasthit == 'G'){
                    clear(1);
                }

                lasthit = "";
            }
        }

        if (overlap(ball, player2)){
            // alert("HIT");

            // check if a move was made

            if (lasthitother == ""){
                notif("other player lost");


            } else {
                //alert("Hit type "+lasthit);

                hit.currentTime = 2.2;
                hit.play();

                if (lasthit == 'A'){
                    smash(-1);
                }
                if (lasthit == 'S'){
                    drive(-1);
                }
                if (lasthit == 'D'){
                    lift(-1);
                }
                if (lasthit == 'F'){
                    drop(-1);
                }
                if (lasthit == 'G'){
                    clear(-1);
                }

                lasthit = "";
            }
        }


        if (Math.abs(playerdx) < 0.3){
            playerdx = 0;
        }

        if (playerdy > 0){
            playerdy -= 0.1;
        }
        if (playerdy < 0){
            playerdy += 0.1;
        }

        if (Math.abs(playerdy) < 0.3){
            playerdy = 0;
        }

        if (player1y > 80){
            playerdy = -Math.abs(playerdy);
        }

        if (player1y < 10){
            playerdy = Math.abs(playerdy);
        }

        if (player1x > 95){
            playerdx = -Math.abs(playerdx);
        }


        if (player1x < 50){
            notif("Opponent point");
            playerdx = Math.abs(playerdx);
        }

        player1x += playerdx;
        player1y += playerdy;

        render();

        await sleep();
    }
})();


game();

(async () => {
    window.addEventListener("keydown", function(event) {
    
      if (event.defaultPrevented) {
        return;
      }
    
    
      
      let actkey = event.code.replace('Key','');

      if (actkey == 'W'){
        serve = 'W';
      }

      if (actkey == 'X'){
        serve = 'X';
      }

      console.log(actkey);

      if (actkey == 'ArrowUp'){
        playerdx -= 2;
        hit2.currentTime = 23;
        hit2.play();
      }

      if (actkey == 'ArrowDown'){
        playerdx += 2;
        hit2.currentTime = 23;
        hit2.play();
      }

      if (actkey == 'ArrowLeft'){
        playerdy += 2;
        hit2.currentTime = 23;
        hit2.play();
      }

      if (actkey == 'ArrowRight'){
        playerdy -= 2;
        hit2.currentTime = 23;
        hit2.play();
      }

      if (actkey == 'Space'){
        jump();
      }

      let movearr = ['A','S','D','F','G'];

      if (movearr.indexOf(actkey) != -1){
        lasthit = actkey;
        lasthitother = actkey;
      }

    //   if (actkey == 'W' || actkey == 'X'){
    //     serve = actkey;
    //   }
    
    }, true);

})(); 
