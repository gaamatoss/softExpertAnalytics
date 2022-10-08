export default async function AnimalServices() {
	const API_URL = 'https://zoo-animal-api.herokuapp.com/animals/rand/10';
	try {
		return await fetch(API_URL)
			.then(res => res.json());
	}
	catch (error) {
		console.log('Error:', error);
	}
}
