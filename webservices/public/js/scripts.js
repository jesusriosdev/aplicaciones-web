const readPersons = async () => {
	const response = await fetch('http://localhost:8080/persons');
	const myjson = await response.json();

	const responseRicknMorty = await fetch('https://rickandmortyapi.com/api/character');
	const myjsonRicknMorty = await responseRicknMorty.json();

	render(myjson, myjsonRicknMorty);
};

const render = (data, dataRicknMorty) => {
    
	let html = data
		.map((elem) => {
            
            var randomnumber = Math.floor(Math.random() * (19 - 0 + 1)) + 0;
            var image = dataRicknMorty.results[randomnumber].image;
			return `
            <div>
                <img src="${image}" alt="character" height="50px" />
                ${elem.name} ${elem.lastname}
            </div>
        `;
		})
		.join(' ');

	document.getElementById('persons').innerHTML = html;
};

readPersons();
