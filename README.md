# Websockets Exploration Project
All the course files for the WebSockets playlist on The Net Ninja YouTube channel.

This project was built as a following a tutorial  for websockets.

_Immediately afterwards there will be a websocket application built with React to create a messanger for a Chingu project._

## Uses of Websockets
- Multiplayer browser games
- Collaborative code editing
- Live text for sports/news websites
- Online drawing canvas
- Real-time to-do apps with multiple users

### Creating the Express App
A server is being created using Node.js and Express to run the application on.


### Setting up WebSockets
- The Socket.io library is being used to set up websockets

- One socket is placed in the front-end(static HTML file), and another is placed in the backend(index.js server file), to set up a socket link between the HTML file each user views to the server

### Sending Messages to the Client

### Broadcasting Messages
- Sends the message to every client except the client that sent the message.