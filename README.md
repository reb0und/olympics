# Olympics

## Description

Olympics (olympics.io) is our final project for CS10 (Berkeley Joy of Computing). We created a set of minigames intended to be hosted on a multiplayer website.

### Rooms

Rooms are one of the integral features of Olympics. When a user enters the website, they are prompted to either join a room or create one. These rooms are identifiable by a six-character alphanumeric code, existing as a Redis entry. These rooms can be created by any user (host) and can be joined by any other user with the room cde. The host is able to manage members and select the game. Each room has a respective websocket instance in which it polls and receives a general status with a tick rate of a millisecond. The state comprised of each player's location and the object's location. The games are intended to be played by 2-4 players, and based on Olmypic games.

### Sessions

Sessions are another essential part of Olmypics. Each session is attributed with UUID for a session identifier and a player. Each request, discluding the root, requires a valid session ID in order to pass and is otherwise redirected. The session is stored in Redis and is set to expire after 24 hours. The session is used to identify the user and is used to store the user's name and room code.

### Games

#### Badminton

#### Tennis

#### Table Tennis

#### Boxing

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
