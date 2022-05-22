<script lang="ts" setup>
  import AdText from '../atoms/AdText.vue';
  import AdInput from '../atoms/AdInput.vue';

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
      type: [String, Boolean],
      required: false,
    },
    classes: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
  });
</script>

<template>
  <div class="ml-textarea-field">
    <ad-input
      type="checkbox"
      :id="id"
      :name="name"
      :value="modelValue"
      :class="classes"
      @input="$emit('update:modelValue',($event?.target as HTMLInputElement).checked)"
    />
    <ad-text :id="id" tag="label" :for="id" class="ml-label">{{ label }}</ad-text>
  </div>
</template>
