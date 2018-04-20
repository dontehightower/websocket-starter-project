// This file establishes a connection to the server to create a socket
// between the server(index.js) and the client(index.html). The
// connection made in this file is the connection being listened for
// in the server.
const socket = io.connect('http://localhost:4000');

// DOM queries for references to different parts of the index.html document
const message = document.getElementById('message');
const handle = document.getElementById('handle');
const btn = document.getElementById('send');
const output = document.getElementById('output');
const feedback = document.getElementById('feedback');

// Emission events -----------------------------------------------------------

// When the button is clicked emit a 'chat' object through the socket that
// carries an object. That object should have a message property, and a handle
// property, corresponding to the values provided in the corresponding
// index.html inputs
btn.addEventListener('click', function(){
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
});

// Whenever the message input logs a keypress event, emit a tying event to the
// socket with the handle of the user triggering the event.
message.addEventListener('keypress', function(){
  socket.emit('typing', handle.value);
});

// Socket Events -------------------------------------------------------------

// Each time a chat event is emitted on the socket, HTML should be displayed in
// to the output div, showing the handle of the sender and the message.
socket.on('chat', function(data){
  feedback.innerHTML = '';
  output.innerHTML += `<p><strong>${data.handle} </strong>${data.message}</p>`;
});

// When the socket receives a typing event, it should display a message
// to indicate the person emitting the event is typing.
socket.on('typing', function(data) {
  feedback.innerHTML = `<p><em>${data} is typing a message...</em></p>`;
});