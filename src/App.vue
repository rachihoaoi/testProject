<!--App.vue是我们的主组件，所有页面都是在App.vue下进行切换的。-->
<!--其实你也可以理解为所有的路由也是App.vue的子组件。所以我将router标示为App.vue的子组件。-->

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
