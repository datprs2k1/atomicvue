<script setup lang="ts">
  import { PropType } from 'vue';

  export type OptionType = {
    value: string;
    label: string;
  };
  defineProps({
    id: {
      type: String,
      required: false,
    },
    name: {
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
    options: {
      type: Array as PropType<OptionType[]>,
      defalut: true,
    },
  });
</script>

<template>
  <select
    :id="id"
    :name="name"
    :value="modelValue"
    :class="classes"
    @input="$emit('update:modelValue', ($event?.target as HTMLInputElement).value)"
  >
    <option v-for="option in options" :key="JSON.stringify(option)" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>
