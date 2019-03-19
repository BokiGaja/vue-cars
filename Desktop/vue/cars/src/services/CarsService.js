import Http from './Http'

class CarsService {
    
    getAll(url) {
        return Http.get(url);
    }

}

export default new CarsService();