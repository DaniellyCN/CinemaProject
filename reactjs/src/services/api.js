import axios from 'axios'
const api = axios.create({
baseURL: 'http://localhost:3030'
})
export default class Api {
    async listarFilmes(date) {
        let r = await api.get(`/availableMovies/${date}`);
        return r.data;
    }

    // Tela 2
    async listarDias(){
        let r = await api.get('/availableDays');
        return r.data;
    }


}