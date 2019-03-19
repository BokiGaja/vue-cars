import Http from './Http'

class CarsService {
    
    getAll(url) {
        return Http.get(url);
    }

    addCar(url, body) {
        return Http.create(url,body);
    }
}

export default new CarsService();