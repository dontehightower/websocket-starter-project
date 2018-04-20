// This file establishes a connection to the server to create a socket
// between the server and the index.html page. The connection made in this file
// is the connection being listened for in the server file, titled index.js.
const socket = io.connect('http://localhost:4000');