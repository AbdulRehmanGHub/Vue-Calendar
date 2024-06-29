<template>
  <div id="app">
    <F_Calendar 
    />
  </div>
</template>

<script>
import F_Calendar from './components/F_Calendar.vue';

export default {
  name: 'App',
  components: {F_Calendar,},
};
</script>

<style>
#app {
  padding: 0px 60px;
  background-color: rgb(246, 255, 246);
  margin: 20px 80px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
