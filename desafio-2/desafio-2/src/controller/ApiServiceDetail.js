import axios from 'axios'

export default async function ApiServiceDetail() {
    try {
        return await axios.get('https://api.covid19api.com/total/country/BR?from=2021-01-01T00:00:00Z&to=2021-01-31T23:59:59Z')
            .then(res => res.data)
    } catch (err) {
        console.log('Error:', err);
    }
}