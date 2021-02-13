var express = require('express');
var app = express();
var server = require('http').Server(app);
const fs = require("fs");

app.use(express.static('public'));

const dataPathPersons = "server/data/persons.json";
const readFile = (callback, filePath) => {
    console.log('entramos a readFile.');
	fs.readFile(filePath, "utf8", (err, data) => {
		if (err) {
			throw err;
		}

        console.log('ya leimos con fs.readFile.');
		callback(JSON.parse(data));
	});
};

app.get("/persons", (req, res) => {
    console.log('entramos a /persons.');
	readFile(
		(data) => {
            
            console.log('ya tenemos la info de readFile.');
			res.status(200).send(data);
		},
		dataPathPersons
	);
});

app.get('/hello', (req, res) => {
	console.log('hello!');
	res.status(200).send('Hello World!');
});

server.listen(8080, () => {
	console.log('Server is running in http://localhost:8080');
});
