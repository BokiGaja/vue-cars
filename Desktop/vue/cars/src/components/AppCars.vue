<template>
    <div class="container">
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
                    <td>{{ car.Engine }}</td>
                    <td>{{ car.numberOfDoors }}</td>
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
            cars: []
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
        console.log(this.cars);
    }
        
}
</script>

<style>

</style>
