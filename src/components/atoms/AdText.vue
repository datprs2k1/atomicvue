<script setup lang="ts">
  import { computed } from '@vue/reactivity';

  const props = defineProps({
    tag: {
      type: String,
      required: true,
      default: 'p',
      validator: (tag: string) => {
        const _tagTypes = ['p', 'h1', 'h2', 'h3', 'span', 'label'];
        return _tagTypes.includes(tag);
      },
    },
    for: {
      type: String,
      required: false,
    },
  });

  const getForProp = computed(() => (props.tag == 'label' ? props.for : null));
</script>

<template>
  <component :is="tag" :for="getForProp">
    <slot />
  </component>
</template>
