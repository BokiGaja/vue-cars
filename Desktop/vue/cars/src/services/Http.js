import axios from 'axios'

const Service = axios.create({
    baseURL: 'http://localhost:3000/api'
})

class Http {
    get(url) {
        return Service.get(url);
    }
    create(url, data) {
        return Service.post(url,data);
    }    
}

export default new Http;
