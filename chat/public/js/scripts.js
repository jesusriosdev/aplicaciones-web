var socket = io.connect('http://localhost:8080', { forceNew: true });

socket.on('messages', (data) => {
	console.log(data);

	render(data);
});

function render(data) {
	let htmlArray = data.map((elem) => {
		let author = elem.author;
		let text = elem.text;

		return `<div>
            <strong>${author}:</strong>
            <em>${text}</em>
        </div>`;
	});
	console.log(htmlArray);

	let html = htmlArray.join(' ');
	console.log(html);

	document.getElementById('divmessages').innerHTML = html;
}

function addMessage(form) {
	let payload = {
		author: document.getElementById('username').value,
		text: document.getElementById('text').value,
	};

    socket.emit('new-message', payload);

    document.getElementById('text').value = '';
    return false;
}
