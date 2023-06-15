const url = 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=fishermans%20wharf&language=en';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '66ff89799emsh70df33108224574p1e3d46jsn74377959bc15',
		'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
