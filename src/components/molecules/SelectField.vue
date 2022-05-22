<script setup lang="ts">
  import AdText from '../atoms/AdText.vue';
  import AdSelect, { OptionType } from '../atoms/AdSelect.vue';
  import { PropType } from 'vue';

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
      defalut: [],
    },
    label: {
      type: String,
      required: false,
    },
  });
</script>

<template>
  <div class="ml-textarea-field">
    <ad-text :for="id" tag="label" class="ml-label">{{ label }}</ad-text>
    <ad-select
      :id="id"
      :name="name"
      :value="modelValue"
      :class="classes"
      :options="options"
      @input="$emit('update:modelValue', ($event?.target as HTMLInputElement).value)"
    />
  </div>
</template>
