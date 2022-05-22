<script setup lang="ts">
import { computed } from "@vue/reactivity";

const props = defineProps({
  cols: {
    type: Number,
    default: 1,
  },
  gap: {
    type: Number,
    default: 4,
  },
});

const numberCols = computed(() => `grid-cols-${props.cols}`);
const gapCols = computed(() => `gap-${props.gap}`);
</script>

<template>
  <div class="grid" :class="[numberCols, gapCols]">
    <slot />
  </div>
</template>
