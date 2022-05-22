<script setup lang="ts">
  import { PropType } from 'vue';

  type ButtonType = 'button' | 'submit' | 'reset' | undefined;

  defineProps({
    type: {
      type: String as PropType<ButtonType>,
      required: false,
      validator: (value: string) => {
        const _buttonType = ['button', 'submit', 'reset'];
        return _buttonType.includes(value);
      },
    },
  });
</script>

<template>
  <button :type="type">
    <slot></slot>
  </button>
</template>
