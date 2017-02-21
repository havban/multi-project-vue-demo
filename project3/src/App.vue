<template>
  <div id="app2">
    <router-link to="/">Home</router-link>
    <router-link to="/doremi">Doremi</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app2'
}
</script>

<style>
#app2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
