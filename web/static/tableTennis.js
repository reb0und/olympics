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

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

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

		if (hit.currentTime > 1.5) {
			hit.pause();
		}

		// acceleration affecting position
		// gravity
		bdz += 1 / 3800;

		if (ballx < 50 && bdx < 0) {
			if (bally - (100 * ballwidth) / cheight < player2y) {
				player2y -= 0.2;
			}

			if (bally - (100 * ballwidth) / cheight > player2y) {
				player2y += 0.2;
			}
		}

		//console.log(ballz);

		if (Math.abs(ballx - 50) < 1 && ballz > 66) {
			if (bdx > 0) {
				confirm("Computer's ball hit net");
				location.reload();
			} else {
				confirm("Your ball hit net");
				location.reload();
			}
		}

		if (bally > 95 && ballz > 65) {
			if (bdx > 0) {
				confirm("Ball out for computer");
				location.reload();
			} else {
				confirm("Ball out for you");
				location.reload();
			}
		}
		if (bally < 5 && ballz > 65) {
			if (bdx > 0) {
				confirm("Ball out for computer");
				location.reload();
			} else {
				confirm("Ball out for you");
				location.reload();
			}
		}

		if (ballz > 60) {
			bdz = -Math.abs(bdz);
		}

		// console.log((player1y)-(bally)+cheight/70, cheight/80);

		// reflecting the ball
		if (ballx > 100) {
			if (bally > 100 || bally < 0) {
				if (confirm("Ball out for computer")) {
					location.reload();
				}
			}

			let swingtime = (new Date() - hittime) / 1000; // this is in seconds now

			console.log(swingtime);
			if (swingtime > 1) {
				if (confirm("You missed!")) {
					location.reload();
				}
			}

			if (Math.abs(player1y - bally + cheight / 70) < cheight / 20) {
				bdx = -Math.abs(bdx) * (Math.random() + 0.5 + swingtime);

				bdy = (Math.random() * 1) / 20;

				if (hitside == "left") {
					bdy = -bdy;
				}

				bdz = -0.085 - Math.random() * 0.02;

				if (ballz < 10) {
					bdz = 0;
				}

				hit.currentTime = 0.6;
				hit.play();
			} else if (ballx > 100) {
				if (confirm("you lost")) {
					location.reload();
				}
				break;
			}
		}

		if (ballx < 10) {
			if (Math.abs(player2y - bally + cheight / 70) < cheight / 40) {
				bdx = Math.abs(bdx) * (Math.random() + 0.7);
				bdy = (Math.random() * 1) / 10 - 0.05;
				bdz = -0.085 - Math.random() * 0.02;

				if (ballz < 10) {
					bdz = 0;
				}

				hit.currentTime = 0.6;
				hit.play();
			} else {
				if (confirm("computer lost")) {
					location.reload();
				}
				break;
			}
		}

		//console.log(Math.abs(player2y-bally));

		render();

		await sleep();
	}
})();

(async () => {
	window.addEventListener(
		"keydown",
		function (event) {
			if (event.defaultPrevented) {
				return;
			}

			let actkey = event.code.replace("Key", "");

			if (actkey == "ArrowUp") {
				player1y -= 3;
				player.style.transform = "rotate(-50deg)";
				p1angle = -50;
			}

			if (actkey == "ArrowDown") {
				player1y += 3;
				player.style.transform = "rotate(230deg)";
				p1angle = 230;
			}

			if (actkey == "Space") {
				(async () => {
					if (p1angle > 150) {
						hitside = "left";
					} else if (p1angle < 30) {
						hitside = "right";
					}

					while (Math.abs(p1angle - 270) > 1 && Math.abs(p1angle + 90) > 1) {
						if (p1angle > 150) {
							p1angle += 1;
						} else if (p1angle < 30) {
							p1angle -= 1;
						}
						player.style.transform = "rotate(" + p1angle + "deg)";
						await sleep();
					}
					hittime = new Date();
				})();
			}
		},
		true
	);
})();
