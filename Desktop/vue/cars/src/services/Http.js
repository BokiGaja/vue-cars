import axios from 'axios'

const Service = axios.create({
    baseURL: 'http://localhost:3000/api'
})

class Http {
    get(url) {
        return Service.get(url);
    }
    create(url, body) {
        return Service.post(url,body);
    }    
}

export default new Http;









