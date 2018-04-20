// This file creates the express server, serves the static HTML
// file located in the public directory, and establishes the
// server-side websocket.

// The client-side websocket is established in the /public/chat.js
// file. And linked to the /public/index.HTML file via a script tag
// in the body.

const express = require('express');
const socket = require('socket.io');
// App setup
const app = express();
const server = app.listen(4000, function(){
  console.log('listening to requests on port 4000.');
});

// Static files
app.use(express.static('public'));

// Socket setup
const io = socket(server);
// When the socket connects, fire a callback function that tells you
// the socket is connected and begins listening for emissions from all sockets.
io.on('connection', function(socket) {
  console.log('Socket connected to server', socket.id);
  // when the server receives a chat event
  socket.on('chat', function(data) {
    // send the message data out to all clients connected to the sever
    io.sockets.emit('chat', data);
  });
  
  // when the server receives a typing event
  socket.on('typing', function(data) {
    // send an event and data to all sockets except the one creating the event
    socket.broadcast.emit('typing', data);
  });
});