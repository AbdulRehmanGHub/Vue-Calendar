<template>
  <div id="calendar-heading">
    <h1>VUE Calendar</h1>
  </div>
  <div id="app">
    <F_Calendar />
  </div>
  <div class="footer">
    <p>Made with &hearts; by Abdul Rehman</p>
  </div>
</template>

<script>
import F_Calendar from './components/F_Calendar.vue';

export default {
  name: 'App',
  components: { F_Calendar, },
};
</script>

<style>
#app {
  margin: 12px;
  padding: 8px;
  background-color: rgb(246, 255, 246);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 26px;
}

#calendar-heading h1 {
  font-size: 36px;
}

.fc-toolbar-chunk .fc-toolbar-title {
  font-size: 40px;
}

.fc-toolbar-chunk button {
  font-size: 20px;
}

.footer{
  padding: 40px 8px;
}


@media (min-width: 1050px) {
  #app {
    padding: 10px 20px;
    margin: 20px;
    font-size: 30px;
  }

  #calendar-heading h1 {
    font-size: 40px;
  }

  .fc-toolbar-chunk .fc-toolbar-title {
    font-size: 50px;
  }

}

@media (max-width: 768px) {
  #app {
    padding: 0;
    margin: 0;
    font-size: 16px;
  }

  #calendar-heading h1 {
    font-size: 26px;
  }

  .fc-header-toolbar.fc-toolbar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .fc-toolbar-chunk .fc-toolbar-title {
    font-size: 30px;
  }

  .fc-toolbar-chunk button {
    font-size: 20px;
  }

}
</style>
