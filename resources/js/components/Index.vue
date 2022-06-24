<template>
    <div>
        <router-link :to="{ name: 'user.index'}">Users</router-link> |
        <router-link :to="{ name: 'user.create'}">Create User</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style scoped>

</style>
