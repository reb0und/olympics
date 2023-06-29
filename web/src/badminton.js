let player1Score = 0;
let player2Sscore = 0;
let player1Sets = 0;
let player2Sets = 0;
// let player1 = new player();
// let player2 = new player();

let playerarr = [];

let response = "";
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

async function gamesim() {
	while (player1Sets !== 2 && player2Sets !== 2) {
		if (player1Score - player2Score > 1 && player1Score > 20) {
			player1Score = 0;
			player2Score = 0;
			player1Sets += 1;
		} else if (player2Score - player1Score > 1 && player2Score > 20) {
			player1Score = 0;
			player2Score = 0;
			player2Sets += 1;
		}

		while (
			Math.abs(player1Score - player2Score) < 2 ||
			(player2Score < 21 && player1Score < 21)
		) {
			let g = await game();
			if (g == 1) {
				player1Score += 1;
			} else {
				player2Score += 1;
			}
		}
	}
}

async function game() {
	document.write("Press w or x");

	while (response == "") {
		await sleep();
	}

	document.write("selected serve " + response);

	while (player1.energy >= 0 && player2.energy >= 0) {}
	if (player1.energy < 0) {
		return 2;
	}
	return 1;
}

function serve() {
	// return location
	if (actkey == "ArrowLeft") {
		player1y -= 3;
		player.style.transform = "rotate(-50deg)";
		p1angle = -50;
	}
	if (actkey == "ArrowRight") {
		player1y += 3;
		player.style.transform = "rotate(230deg)";
		p1angle = 230;
	}
	if (actkey == "ArrowUp") {
		player1y -= 3;
		player.style.transform = "rotate(-50deg)";
		p1angle = -50;
	}
}

function smash() {}

function drive() {}

function lift() {}

function drop() {}

function clear() {}

// function hit{

// }

// function serve{

// }

let player = document.getElementById("player");
let player2 = document.getElementById("player2");
let player3 = document.getElementById("player3");
let player4 = document.getElementById("player4");

let hit = new Audio("../assets/sfx/hit.mp4");

let court = document.getElementById("court");
let ball = document.getElementById("ball");
let courtside = document.getElementById("courtside");

let playerh = player.offsetHeight;
let ballwidth = ball.offsetWidth;

let cwidth = court.offsetWidth;
let cstart = court.offsetLeft;
let cheight = court.offsetHeight;

let sheight = courtside.offsetHeight;
let swidth = courtside.offsetWidth;
let sstart = cheight;

console.log(sstart);

player.style.left = "100px";

courtside.style.top = cheight + "px";

let player1x = 100;
let player1y = 50;
let p1angle = -90;
let p2angle = 90;
let hittime = null;
let hitside = "";

let player2x = 0;
let player2y = 75;

let ballx = 10;
let bally = 20;
let ballz = 50;

let bdx = 0.15;
let bdy = 0.05;
let bdz = -0.05;

let baz = 1;

function render() {
	// top view
	player.style.left =
		(player1x / 100) * cwidth - player.offsetWidth / 2 + cstart + "px";
	player.style.top =
		(player1y / 100) * cheight - player.offsetHeight / 2 + "px";

	player2.style.left =
		(player2x / 100) * cwidth - player.offsetWidth / 2 + cstart + "px";
	player2.style.top =
		(player2y / 100) * cheight - player.offsetHeight / 2 + "px";

	ball.style.left =
		(ballx / 100) * cwidth - player.offsetWidth / 2 + cstart + "px";
	ball.style.top = (bally / 100) * cheight - player.offsetHeight / 2 + "px";

	// for the side view

	player3.style.left =
		(player1x / 100) * cwidth - player.offsetWidth / 2 + cstart + "px";
	player3.style.width = (7 * player1y) / 100 + "%";
	player3.style.top =
		0.5 * sheight - player.offsetHeight / 2 + sstart + 50 + "px";

	player4.style.left =
		(player2x / 100) * cwidth - player.offsetWidth / 2 + cstart + 50 + "px";
	player4.style.top = 0.5 * sheight - player.offsetHeight / 2 + sstart + "px";
	player4.style.width = (7 * player2y) / 100 + "%";

	ball2.style.left =
		(ballx / 100) * cwidth - player.offsetWidth / 2 + cstart + "px";
	ball2.style.top =
		(ballz / 100) * cheight - player.offsetHeight / 2 + cstart + "px";
	ball2.style.width = (2 * bally) / 100 + "%";
}

(async () => {
	while (true) {
		// velocity affecting position
		ballx += bdx;
		bally += bdy;
		ballz += bdz;

		render();

		await sleep();
	}
})();

game();

(async () => {
	window.addEventListener(
		"keydown",
		function (event) {
			if (event.defaultPrevented) {
				return;
			}

			let actkey = event.code.replace("Key", "");

			if (actkey == "W") {
				response = "W";
			}

			if (actkey == "X") {
				response = "X";
			}
		},
		true
	);
})();
