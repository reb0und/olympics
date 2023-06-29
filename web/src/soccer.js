let soccerBall = document.getElementById('soccerBall');
let goalPost = document.getElementById('goalPost');
let goalie = document.getElementById('goalie');
let scoreDisplay = document.getElementById('score');

let goalPostW = goalPost.offsetWidth;
let goalPostH = goalPost.offsetHeight;
let goalposts = goalPost.offsetLeft;

let soccerBallX = 50;
let soccerBallY = 90;
let glw = goalie.offsetWidth;
let glh = goalie.offsetHeight;
let goaliex = 45;
let goaliey = 50;

function render(){
  soccerBall.style.left = (soccerBallX/100*goalPostW+goalposts)+"px";
  soccerBall.style.top = (soccerBallY/100*goalPostH)+"px";

  goalie.style.left = (goaliex/100*goalPostW+goalposts)+"px";
  goalie.style.top = (goaliey/100*goalPostH)+"px";
}

render();
 

let score = 0;

function updateScore() {
  scoreDisplay.textContent = 'Score: ' + score;
}

function moveBall(targetX, targetY) {
  soccerBallX = targetX;
  soccerBallY = targetY;
  render();
}

function shootBall(key) {
  let targetX, targetY;
  if (key === 'q') {
    targetX = 20;
    targetY = 40;
  } else if (key === 'w') {
    targetX = 45;
    targetY = 40;
  } else if (key === 'e') {
    targetX = 75;
    targetY = 40;
  } else if (key === 'a') {
    targetX = 20;
    targetY = 65;
  } else if (key === 's') {
    targetX = 45;
    targetY = 65;
  } else if (key === 'd') {
    targetX = 70;
    targetY = 68;
  }
  moveBall(targetX, targetY);
  block(key);
}

function block(key) {
  const alphabet = "qweasd";
  const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
  
  if (key === randomCharacter) {
    setTimeout(() => {
      if (confirm("Goalie blocked your shot! Please try again.")) {
        location.reload();
        render();
      }
    }, 200);
  } else {
    setTimeout(() => {
      if (confirm("GOAL! Do you want to play again?")) {
        score++;
        updateScore();
        location.reload();
        render();
      }
    }, 200);
  }
}

document.addEventListener('keypress', function(event) {
  const key = event.key.toLowerCase();

  if (key === 'q' || key === 'w' || key === 'e' || key === 'a' || key === 's' || key === 'd') {
    shootBall(key);
  }
});

soccerBall.addEventListener('click', function() {
  score++;
  updateScore();
  resetBallPosition();
});

function resetBallPosition() {
  soccerBall.style.left = '45%';
  soccerBall.style.top = '90%';
}

function centerGoalie() {
  const goalieLeft = goalPostLeft + goalPostWidth / 2 - goalieWidth / 2;
  const goalieTop = goalPost.offsetTop + (goalPostHeight - goalieHeight) / 2;
  goalie.style.left = goalieLeft + 'px';
  goalie.style.top = goalieTop + 'px';
}

updateScore();
centerGoalie();
