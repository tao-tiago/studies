const express = require('express');
const socket = require('socket.io');

const app = express();

app.use(express.static(__dirname + '/public'));

const server = app.listen(3000)
const io = socket(server);

io.on('connection', (socket) => {

  console.log(socket.id);

  socket.emit('messageFromServer', { message: 'Welcome to the chat room!' });

  socket.on('messageFromClient', (data) => {
    console.log(data);
  });
})