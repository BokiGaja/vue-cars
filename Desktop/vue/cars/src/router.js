import VueRouter from 'vue-router'
import AppCars from './components/AppCars'

const routes = [
    { path: '/cars', component: AppCars }
]

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;