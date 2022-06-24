<template>
    <div class="w-25 mt-3">
        <div class="mb-3">
            <input type="text" v-model="name" placeholder="Name" class="form-control">
        </div>
        <div class="mb-3">
            <input type="text" v-model="email" placeholder="Email" class="form-control">
        </div>
        <div class="mb-3">
            <input type="text" v-model="phone" placeholder="Phone" class="form-control">
        </div>
        <div class="mb-3">
            <select v-model="position_id" class="form-control">
                <option :value="pos.id" v-for="pos in positionsAll">{{pos.title}}</option>
            </select>
        </div>
        <div class="mb-3">
            <input type="file" @change="processFile($event)" class="form-control">
        </div>
        <div class="mb-3">
            <input :disabled="!isDisabled" @click.prevent="store" type="submit" value="Add User" class="btn btn-primary">
        </div>
    </div>
</template>

<script>
export default {
    name: "Create",

 data(){
        return{
            name: null,
            email: null,
            phone: null,
            position_id: null,
            photo: null,
            positionsAll: [],
            bearer: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiN2Y5YzcyYjBiYmQ3ZGExM2UxNjkyYjRhY2IzZDFiM2ExZTlmOGE2MmQwNDk4YjcxNzU1NDkwNWQ4ODI3MGVkYjRkYjBhZDFhNTEwMjVhMjQiLCJpYXQiOjE2NTYwNzcxNzMuNTQ1NDcyLCJuYmYiOjE2NTYwNzcxNzMuNTQ1NDcyLCJleHAiOjE2ODc2MTMxNzMuMzM2NDYsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.UNLLF_DdOjnkgB8StDfw5KQdK15RBc4rL_lTGiHRXEcv6NGdKkZoGh5atNOT9rk-k7eqWF9jorunsJ7tvwf5_Br4aUSFni0fsPxUur7L0upVCPuzLbUYBktX2gGvZO9OrVBUK7hzeiABImhbiWS9xhVpI3w4N1Awb21R8Cz0TXXsOU9Z3O_tfKcfL4zMGfjNubrS458qLYyVGuGMv_nw77aqTf87nKzmk1JONGW4vBM8HReOSKJHq7W-1FCbG-874rPcW5WrMAYWkgM8znOR4GpF-mJwgyJ1PV-vc2jgUJe3Tzun1RiQt8ni8XO62f8pZb_8tmNahz89pS8CvQlLsO3zlI8RqR7CrqIIVHl6j6GX3CdnGOztP8XB31OLWQsTsfpnGqE-kf9QTMwvBVkk3K8JJfH0uPv-jmA2m9TtwMJlek8y9PB3vSxlsD9PUmdS96ZINS8bwYIsR7Z9O9gCwkaN1NC2W6A52NboKJ3XJnovoTE1UYdeVpfEpx4-HhD2OAsp-2-QN6Uos5buxz_E5PMYzB2ff0_9dkDNjgrqGryPzqTTmcEOLrDf3FseHVJ4ruwkbP8JJIOCavuyUUGXwQPTmagPfxmCnKIrcYK8zo3GlkSBgu2rwbqPFJQU0e019pmDkkDgcBL8ZX1dLIbDkSraF9rrLl9NY2Xy6G5JEPw'
        }
    },

    mounted() {
        this.getPositions()
    },

    methods:{
        store(){
            let formData = new FormData();

            formData.append('name', this.name);
            formData.append('email', this.email);
            formData.append('phone', this.phone);
            formData.append('photo', this.photo);
            formData.append('position_id', this.position_id);

            axios.post('/api/v1/form', formData, {
                headers:  {
                    Authorization : `Bearer ${this.bearer}`,
                    Accept : 'application/json'
                    }
            }).then(res => {
                    this.$router.push({name: 'user.index'})
                }).catch(error => {
                    console.log('Error:', error.response);
                    });
        },

        getPositions(){
                axios.get('/api/v1/positions',{
                headers:  {
                    Authorization : `Bearer ${this.bearer}`,
                    Accept : 'application/json'
                    }
            }).then(res => {
                this.positionsAll = res.data.data
                })

        },

        processFile(event) {
            this.photo = event.target.files[0]
        },
    },

    computed:{
        isDisabled(){
           return this.name && this.email
        }
    }
}
</script>

<style scoped>

</style>
