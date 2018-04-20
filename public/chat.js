// This file establishes a connection to the server
// to create a websocket between the server and the
// static HTML page. The connection made in this file
// is the connection being listened for in the index.js
// server file.

const socket = io.connect('http://localhost:4000');