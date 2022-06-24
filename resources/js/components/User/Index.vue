<template>
    <div>
       <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Position</th>
              <th scope="col">Data</th>
              <th scope="col">Photo</th>
            </tr>
          </thead>
          <tbody>
          <tr v-for="user in usersLoad">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.phone }}</td>
              <td>{{ user.position }}</td>
              <td>{{ user.registration_timestamp }}</td>
              <td>
                  <img v-if="user.photo" :src="/storage/+user.photo" alt="photo"/>
              </td>
          </tr>
          </tbody>
        </table>
        <button @click="showMore" class="btn btn-primary">Show more</button>
    </div>
</template>

<script>
export default {
    name: "Index",

    data(){
        return{
            users: [],
            length: 6,
            bearer: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNDc2NWQzODg0OGI3NmY2NWVjNDYzMDZmZGRiMWFjN2Y2NzU3ZWEwNTUwMDNiNjlmOWRhZWE3MjVkMDk3NjlmMjAyNjdiNGNkZDMwNGFmMjMiLCJpYXQiOjE2NTU5OTQ4NTkuMTc2NTQ4LCJuYmYiOjE2NTU5OTQ4NTkuMTc2NTQ4LCJleHAiOjE2ODc1MzA4NTkuMTY1NTQ3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.ArQ1H6XBi03W0Up_fakNq3QreP7RL5fplOwfHR_2rSpbPVulmTCl4HYUxHN1Q3gM_bjFEwAeMOMx53f1GeAaADFEAW49XU1YIj75mXjuk5bG9Qho4BGZHVniRn2uIBmFC2GkPaeo-Lv3EZ3-as0wlQ3FYl-u7bL84N8TEL3kATKTVodfp7hPg1ot1P2l8ummO6qNoQ1Ppt9lEQkACxRALxioZfHpsuOZXdd_8v5ntPSNTALsq4Fcr1t2X6UQxose0RP9gdSjIjtxI6k97kMIeUccxKfioepvFN4dW8AK88-P99zmU2BjlZHJZiyWIdkGxOKdxMFOzpiP1NzMIWZVHgFCkTBx3c6WIHudi9K0E_rIwqbMY33cSwxsAfXWUu7XkWsH4gfwTTe30SAz6L8UWM7pR3v2ZQXc-oI6DsQoehUqJ3sjhJ_z6ZOaXgoJ6FDuEyYiPAJHYJb4OuZChoJUQgRHiUQjWzh_bPe2ZbeiIhZude49KcMegg5Hh4StjVbgdYcCta2nyWNnAwyNXnuGOEqNI0M26iQE79fRGzFZAdPT9eQ6ICoYuEg37ZtXDWokMBItRJE_R2RapAZisqwkOFSKVj2SWNPYUh7ExJLiVwp8HIk5Eghhr6Ai2GPfiZLgctu5phHFJ8sUjKUHAOBKjWyNSVU70QCEqO78poknmWA'
        }
    },

    mounted() {
        this.getPeople()
    },

    methods: {
      getPeople(){
        axios.get('/api/v1/users', {
            headers: {
            Authorization: `Bearer ${this.bearer}`
          }
        })
            .then(res => {
                this.users = res.data.data
            })
        },

        showMore(){
          if (this.length > this.users.length) return;
            this.length = this.length + this.length;
        }
    },

    computed: {
        usersLoad() {
         return this.users.slice(0, this.length);
        },
    }
}
</script>

<style scoped>
    table.table td{vertical-align: middle;}
</style>
