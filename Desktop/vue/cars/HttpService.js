import axios from 'axios';

const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

class HttpService {
    get(url) {
        return http.get(url);
    }

    post(url, body) {
        return http.post(url, body);
    }

}

export default new HttpService();