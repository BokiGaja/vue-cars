import VueRouter from 'vue-router'
import AppCars from './components/AppCars'
import AddCar from './components/AddCar'

const routes = [
    { path: '/cars', component: AppCars },
    { path: '/add-car', component: AddCar },
    { path: '/edit/:id', component: AddCar },

]

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;