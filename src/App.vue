<template>
  <div id="app">
    <ToDoList/>
  </div>
</template>

<script>
import store from "./store";
import ToDoList from "./components/ToDoList.vue";

export default {
  name: "app",
  store,
  components: {
    ToDoList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
