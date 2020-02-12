/* eslint-disable no-console */
/**
 * ************************************
 *
 * @module  server.js
 * @author Timothy Mai
 * @date 2/11/20
 * @description creating socket.io server
 *
 * ************************************
 */

const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// server is running on localhost:3001
server.listen(3001, () => {
  console.log('listening on port 3001');
});

io.on('connection', (socket) => {
  console.log('io: a user connected');

  // functionality for sending messages
  socket.on('sendMessage', (message) => {
    console.log('send message:', message);
    // after you send a message, the server will then broadcast that to all other users
    io.emit('receiveMessage', message);
  });

  // functionaly for disconnecting
  socket.on('disconnect', () => {
    console.log('io: a user disconnected');
  });
});
