var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server, {
	cors: '*',
	serveClient: true,
});

var messages = [
	{
		id: 1,
		text: 'Hello..',
		author: 'Jesus R',
	},
	{
		id: 2,
		text: 'Hello back..',
		author: 'Jessica G',
	},
];

app.use(express.static('public'));

io.on('connection', (socket) => {
	console.log('Someone has connected..');

	socket.emit('messages', messages);

	socket.on('new-message', (data) => {
		messages.push(data);
		console.log(data);
		console.log(messages);

		io.sockets.emit('messages', messages);
	});
});

server.listen(8080, () => {
	console.log('Server is running in http://localhost:8080');
});
