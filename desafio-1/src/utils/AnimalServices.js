class AnimalServices {
	static API_URL = 'https://zoo-animal-api.herokuapp.com/animals/rand/10';

	static async getAnimals() {
		return fetch(this.API_URL).then(res => res.json());
	}
}

export default AnimalServices;