<script lang="ts" setup>
  import AdText from '../atoms/AdText.vue';
  import AdInput from '../atoms/AdInput.vue';

  import { PropType } from 'vue';

  type InputType = 'text' | 'password' | 'email' | 'number' | 'checkbox' | 'radio' | undefined;

  defineProps({
    type: {
      type: String as PropType<InputType>,
      required: false,
      validator: (value: string) => {
        return ['text', 'password', 'email', 'number', 'checkbox', 'radio'].includes(value);
      },
    },
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
    label: {
      type: String,
      required: false,
    },
  });
</script>

<template>
  <div class="ml-textarea-field">
    <ad-text :id="id" tag="label" :for="id" class="ml-label">{{ label }}</ad-text>
    <ad-input
      :type="type"
      :id="id"
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      :class="classes"
      @input="$emit('update:modelValue', ($event?.target as HTMLInputElement).value)"
    />
  </div>
</template>
