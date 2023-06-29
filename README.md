# Olympics

## Description

Olympics (olympics.io) is our final project for CS10 (Berkeley Joy of Computing). We created a set of minigames intended to be hosted on a multiplayer website.

### Rooms

Rooms are one of the integral features of Olympics. When a user enters the website, they are prompted to either join a room or create one. These rooms are identifiable by a six-character alphanumeric code, existing as a Redis entry. These rooms can be created by any user (host) and can be joined by any other user with the room cde. The host is able to manage members and select the game. Each room has a respective websocket instance in which it polls and receives a general status with a tick rate of a millisecond. The state comprised of each player's location and the object's location. The games are intended to be played by 2-4 players, and based on Olmypic games.

### Sessions

Sessions are another essential part of Olmypics. Each session is attributed with UUID for a session identifier and a player. Each request, discluding the root, requires a valid session ID in order to pass and is otherwise redirected. The session is stored in Redis and is set to expire after 24 hours. The session is used to identify the user and is used to store the user's name and room code.

### Games

Below are descriptions of our minigames.

#### Badminton

The Badminton game works by simulating a singles badminton game, with the camera view from top side, as if from the bleachers. The game requires moving the player around to be in a position to hit the ball, and choosing a stroke to hit. The position is changed by pressing the arrow keys, and each movement moves the player around 1/3 of the board forward. In addition, if the player goes out of bounds or hits the net, they will spring back in the opposite direction. In addition, there are 5 different badminton strokes that can be hit, with some hitting the ball in a vertical projectile motion trajectory, while others sending the ball straight down as a smash. There are also sound effects, played when a player moves, or when they hit the ball.

#### Tennis

The Tennis game is played by both positioning the player to align with the ball, as well as pressing the space bar to hit the ball. The player, court and ball are displayed using 2 views, one top view and one side view. The top view focuses on displaying the position of the ball and the players, allowing the player to view the court directly from above. In addition, the game displays a side view, focused on both displaying the height of the ball, as well as the distance from the “camera” on the side of the net to the ball, which it does by increasing the size of the ball as it moves closer to the “camera”. Players can press Up and Down arrows to move the player up and down, and the player will turn in the direction the move. In addition the player can press the space bar to hit the ball. The ball will be deflected based on the direction the player is faces, as well as the timing of the space press. In addition the game ends when either player hits the ball out of bounds, or into the net. In addition, the player has energy, which gets depleted based on the force applied to the shot, as well as how much the player moves. The energy is also replenished constantly. In addition, there are sound effects for hitting the ball.

#### Table Tennis

Table tennis has 2 players game viewed from the perspective of the audience. Players can either turn left and turn right to hit the ball and they can also move up and down the court. When the ball goes outside the court the player wins. If they miss the ball or hit it out, they lose. Press the space bar early to allow yourself to hit the ball. Table Tennis is a fun way to challenge yourself to practice the game we have all played when we were young. Through this game, players can redo their favorite childhood pastime, table tennis!

#### Boxing

The Boxing game is viewed from an audience point of view. It is played by two players, which player 1 stands on the left and player 2 stands on the right. To win the players have to mash their respective keys: "space" for player 1 and "enter" for player 2. By pressing their respective keys, the players will push their opponents towards the red lines on the near edge of the screen. Player 1 wins by pushing player 2 to the red line on the right. Player 2 wins by pushing player 1 to the red line on the left. The game starts after the "Fight" appears on the screen.

#### Soccer

Soccer is a penalty-shooting game in which the user presses the keys qweasd to determine where the soccer ball will be kicked. Then a function block() is called to make the goalie randomly determine a position to block. When the soccer ball and goalie position is the same the goalie blocks the ball, when the two are not the same the ball goes into the goal and it's a goal.

### Requirements

- Python 3.9+
- Redis 7+
- Go 1.14+
- pip3 21+

## Installation

In order to install dependencies, execute the following command:

> Python dependencies: `pip3 install -r requirements.txt`

## Setbacks

Due to the nature of the project, we were unable to implement all of the features we wanted to. This included seeing multiplayer features in production. We were able to implement the multiplayer features in a local environment, but we were unable to deploy it to a server. We also wanted to implement more games, but we were unable to do so again due to time constraints.

## Authors

- [Praval Chaudhary](https://github.com/Chaudhary-Prval888)
- [Steven Chen](https://github.com/stevenchenhanwen)
- [Shubham Parab](https://github.com/Skparab1)
- [Veeral Shroff](https://github.com/veerals)
- [Myself](https://github.com/reb0und)
