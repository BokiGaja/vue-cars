import HttpService from './HttpService';


class PostService {
    getPosts() {
        return HttpService.get('/posts');
    };

    create(post) {
        return HttpService.post('/posts', 
        post
    )
    }
}

export default new PostService;