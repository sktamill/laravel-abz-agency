import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/', component: () => import('./components/User/Index'),
            name: 'user.index'
        },
        {
            path: '/create', component: () => import('./components/User/Create'),
            name: 'user.create'
        },

    ]
})

