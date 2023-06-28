


let player1x = 100;
let player1y = 50;

let soccerBall = document.getElementById('soccerBall');
let sbw = soccerBall.offsetWidth;

let ballz = 50;
let score = 0;
let goalie = document.getElementById('goalie');
let goalPost = document.getElementById("goalPost");

let goalpostw = goalPost.offsetWidth;
let goalposth = goalPost.offsetHeight;
let goalposts = goalPost.offsetLeft;

let soccerBallx = 50;
let soccerBally = 50;

let goaliex = 25;
let goaliey = 75;
let glw = goalie.offsetWidth;
let glh = goalie.offsetHeight;

function render(){
    soccerBall.style.left = (soccerBallx/100*goalpostw+goalposts)+"px";
    soccerBall.style.top = (soccerBally/100*goalposth)+"px";

    goalie.style.left = (goaliex/100*goalpostw+goalposts+glw)+"px";
    goalie.style.top = (goaliey/100*goalposth-glh)+"px";
}

let actkey = '';

let inp = '';

goalie.style.left = '75%';
soccerBall.style.left = '75%';
soccerBall.style.down = '50px';

render();

async function kick(){

    const sleep = ms => new Promise(res => setTimeout(res, ms));

    while (inp == ""){
        await sleep();
    }

    if (actkey == "q"){
        soccerBall.style.right = '180px';
        soccerBall.style.up = '10px'
    }
    else if ( actkey == "w"){
        soccerBallx = 60;
        soccerBally = 65;
    }
    else if ( actkey == "e"){
        soccerBallx = 80;
        soccerBally = 65;
    }
    else if ( actkey == "a"){
        soccerBallx = 20;
        soccerBally = 25;
    }
    else if ( actkey == "s"){
        soccerBallx = 60;
        soccerBally = 25;
    }
    else if ( actkey == "d"){
        soccerBallx = 80;
        soccerBally = 25;
    }
}

    function block(){
        const alphabet = "qweasd"
        const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
        if(actkey == randomCharacter){
            
            if(confirm("Goalie blocked your shot please try again")){
                location.reload();
            }
            else{}
        }
        else if(actkey != randomCharacter){
            if(confirm("GOAL!")){
                location.reload();
                score++;
            }
            else{}
        }
    }

(async () => {
    while (score < 5){
        await kick();
        block();
    }
})();


(async () => {
    window.addEventListener("keydown", function(event) {

    if (event.defaultPrevented) {
        return;
    }

    actkey = event.code.replace('Key','')


    }, true);
})();