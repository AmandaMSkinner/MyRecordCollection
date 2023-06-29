<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view />
    <router-view name="extra"/>
  </div>
</template>

<script>

export default {
  name: 'app'
}
//<router-link to="/MyRecordCollection/">Home</router-link> | 
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
}
</style>
