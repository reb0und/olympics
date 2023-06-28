

let actkey = event.code.replace('Key','')
let player1x = 100;
let player1y = 50;

let player2x = 0;
let player2y = 75;


function render(){
    player3.style.left = (player1x/100*cwidth-player.offsetWidth/2+cstart)+'px';
    player3.style.width = 7*player1y/100+"%";
    player3.style.top = (0.5*sheight-player.offsetHeight/2+sstart+50)+'px'

    
    player4.style.left = (player2x/100*cwidth-player.offsetWidth/2+cstart+50)+'px';
    player4.style.top = (0.5*sheight-player.offsetHeight/2+sstart)+'px'
    player4.style.width = 7*player2y/100+"%";
}