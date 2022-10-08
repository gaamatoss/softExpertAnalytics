let AnimalServices = {
	async getAnimals() {
		try {
			const API_URL = 'https://zoo-animal-api.herokuapp.com/animals/rand/10';
			return await fetch(API_URL)
				.then(res => res.json());
		}
		catch (e) {
			console.log('Error:', e);
		}
	}
}

export default AnimalServices