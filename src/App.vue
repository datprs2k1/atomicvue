<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TaskForm from "./components/organisms/TaskForm.vue";
import AdRow from "./components/atoms/AdRow.vue";
import TasksForm from "./components/organisms/TasksForm.vue";
</script>

<template>
  <ad-row :cols="2">
    <ad-row><task-form /></ad-row>
    <ad-row><tasks-form /></ad-row>
  </ad-row>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
