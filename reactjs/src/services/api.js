import axios from 'axios'
const api = axios.create({
baseURL: 'http://localhost:3030'
})
export default class Api {
    async listarFilmes(date) {
        let r = await api.get(`/availableMovies/${date}`);
        return r.data;
    }
}