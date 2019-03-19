import Http from './Http'

class CarsService {
    
    getAll(url) {
        return Http.get(url);
    }

    addCar(url, body) {
        return Http.create(url,body);
    }
    update(url, body) {
        return Http.put(url,body);
    }
}

export default new CarsService();