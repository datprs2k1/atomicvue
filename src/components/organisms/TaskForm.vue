<script lang="ts" setup>
import AdText from "../atoms/AdText.vue";
import InputField from "../molecules/InputField.vue";
import TextareaField from "../molecules/TextareaField.vue";
import SelectField from "../molecules/SelectField.vue";
import AdButton from "../atoms/AdButton.vue";
import { reactive, ref } from "vue";
const a = reactive({
  title: "",
  description: "",
  priority: "normal",
});

const options = [
  {
    value: "normal",
    label: "Normal",
  },
  {
    value: "high",
    label: "High",
  },
  {
    value: "low",
    label: "Low",
  },
];

const onSubmit = () => {
  console.log(a);
};
</script>

<template>
  <ad-text tag="h1">New Task</ad-text>
  <form @submit.prevent="onSubmit">
    <input-field v-model="a.title" />
    <textarea-field label="Description" v-model="a.description" />
    <select-field lable="Priority" :options="options" v-model="a.priority" />
    <ad-button type="submit">Submit</ad-button>
  </form>
</template>
