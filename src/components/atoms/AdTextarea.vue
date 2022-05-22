<script setup lang="ts">
import { PropType } from "vue";

defineProps({
  id: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
  modelValue: {
    type: String,
    required: false,
  },
  classes: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <textarea
    :id="id"
    :name="name"
    :value="modelValue"
    :placeholder="placeholder"
    :class="classes"
    @input="$emit('update:modelValue', ($event?.target as HTMLInputElement).value)"
  ></textarea>
</template>
