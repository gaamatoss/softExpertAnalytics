import axios from 'axios'

export default async function ApiService() {
    try {
        return await axios.get('https://api.covid19api.com/countries')
            .then(res => res.data)
    } catch (err) {
        console.log('Error:', err);
    }
}