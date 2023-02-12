const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0af07321d2msh5a41d90d50bd4d8p1440f5jsn2d7f61b772a3',
		'X-RapidAPI-Host': 'wordle-creator-tools.p.rapidapi.com'
	}
};

fetch('https://wordle-creator-tools.p.rapidapi.com/new-word?wordlength=5', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0af07321d2msh5a41d90d50bd4d8p1440f5jsn2d7f61b772a3',
            'X-RapidAPI-Host': 'wordle-creator-tools.p.rapidapi.com'
        }
    };
    
    fetch('https://wordle-creator-tools.p.rapidapi.com/check-word?word=speak', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));