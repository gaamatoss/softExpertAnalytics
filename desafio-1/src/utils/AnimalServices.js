export default class AnimalServices {
	static API_URL = 'https://zoo-animal-api.herokuapp.com/animals/rand/10';

	static async getAnimals() {
		try {
			return await fetch(this.API_URL)
				.then(res => res.json());
		}
		catch (e) {
			console.log('Error:', e);
		}
	}
}