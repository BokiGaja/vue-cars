<template>
    <div class="container">
        <router-link to="/add-car">Add car</router-link>
        <table class="table table-light">
            <thead>
                <tr>
                    <th>id</th>
                    <th>brand</th>
                    <th>model</th>
                    <th>year</th>
                    <th>maxSpeed</th>
                    <th>isAutomatic</th>
                    <th>Engine</th>
                    <th>numberOfDoors</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="car in cars" :key="car.id">
                    <td>{{ car.id }}</td>
                    <td>{{ car.brand }}</td>
                    <td>{{ car.model }}</td>
                    <td>{{ car.year }}</td>
                    <td>{{ car.maxSpeed }}</td>
                    <td>{{ car.isAutomatic }}</td>
                    <td>{{ car.engine }}</td>
                    <td>{{ car.numberOfDoors }}</td>
                    <td>
                        <router-link class="btn btn-warning" :to="'/edit/' + car.id"> Edit </router-link>
                        <button class="btn btn-danger" @click="deleteCar(car.id)"> DEL </button>
                    </td>
                </tr>
            </tbody>
            
        </table>
    </div>
</template>

<script>
import CarsService from '../services/CarsService.js'
export default {
    data() {
        return {
            cars: [],
            car: {
                "brand": "",
                "model": "",
                "year": 0,
                "maxSpeed": 0,
                "isAutomatic": false,
                "engine": "",
                "numberOfDoors": 0,
            }
        }
    },

    methods: {
        async deleteCar(id) {
            
            try{ 

                await CarsService.delete('/cars/' + id);

            } catch(e) {
                console.log(e);
            }
            
        }
    },

    async created() {
        try {
        const { data } = await CarsService.getAll('/cars');
            this.cars = data;
        }
        catch(e){
            console.log(e)
        }
    }
        
}
</script>

<style>

</style>
