

<template>
    <div class="container">

 <form @submit.prevent="addCar">

                <div class="form-group">
                    <label>Brand</label>
                    <input v-model="car.brand" pattern=".{2,}" title="2 characters minimum" type="text" class="form-control" required>
                </div>

                <div class="form-group">
                    <label>Model</label>
                    <input v-model="car.model" pattern=".{2,}" title="2 characters minimum" type="text" class="form-control" required>
                </div>

                <div class="form-group">
                    <label>Year</label>
                    <input v-model="car.year"  type="number" class="form-control" required>
                </div>

                <div class="form-group">
                    <label>Max speed</label>
                    <input v-model="car.maxSpeed" type="number" class="form-control">
                </div>

                <div class="form-group">
                    <label>Automatic?</label>
                    <input v-model="car.isAutomatic" type="checkbox" class="form-control">
                </div>

                <div class="form-group">
                    <label>Engine</label>
                    <input v-model="car.engine"  type="text" class="form-control" required>
                </div>

                <div class="form-group">
                    <label>Number of doors</label>
                    <input v-model="car.numberOfDoors" type="number" class="form-control" required>
                </div>
                <button type="submit" class="btn btn-primary">Add car</button>
                <button type="reset" class="ml-2 btn btn-danger">Reset</button>
                <button type="button" @click="showPreview" class="ml-2 btn btn-warning">Preview</button>
            </form>

        
    </div>
</template>

<script>
import CarsService from '../services/CarsService.js'
export default {
    data() {
        return {
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
        async addCar() {
            try {
                await CarsService.addCar('/cars', this.car);
                this.$router.push('/cars')
                console.log('added car');

            } catch(e) {
                console.log(e)
            }
        },
        showPreview() {
            alert(`
            Car brand: ${this.car.brand}, 
            Car model: ${this.car.model}, 
            Car year: ${this.car.year}, 
            Car is automatic: ${this.car.isAutomatic}, 
            Car engine: ${this.car.engine}, 
            Car Number of doors: ${this.car.numberOfDoors}, `)
        }
    },
 
}
</script>

<style>

</style>
