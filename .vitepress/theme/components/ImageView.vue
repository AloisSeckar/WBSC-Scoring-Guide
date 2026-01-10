<template>
  <div style="display: flex; flex-direction: row; gap: 1rem;">
    <img v-for="image in images" :key="image.src" :src="`../images/${image.src}`" :alt="image.alt" />
  </div>
</template>

<script setup lang="ts">
type Image = {
  src: string;
  alt?: string;
};
defineProps<{
  images: Image[];
}>();
</script>
