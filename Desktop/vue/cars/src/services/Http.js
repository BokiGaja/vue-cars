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
    put(url, body) {
        return Service.put(url, body);
    }
    delete(url) {
        return Service.delete(url);
    }
}

export default new Http;
