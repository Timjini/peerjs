const { ExpressPeerServer } = require('peer');
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

// cors allows us to make requests from the client to the server on a different port
const cors = require('cors');
// allow localhost:4000 to make requests to localhost:5000
app.use(cors({ origin: 'http://localhost:4000' }));


const peerServer = ExpressPeerServer(server, {
  path: '/peer-server', // Specify the path for the Peer server
});

app.use('/peerjs', peerServer); // Use the Peer server middleware

const PORT = process.env.PORT || 5000; // Define the port for the Peer server
server.listen(PORT, () => {
  console.log(`Peer server is running on port ${PORT}`);
});
