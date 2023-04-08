<template>
  <a-card hoverable style="width: 240px; margin: 20px;">
    <template #cover>
      <img :alt="title" :src="imgSrc" style="width: 240px; height: 300px; object-fit: cover;"/>
    </template>
    <a-card-meta :title="title">
      <template #description>{{ update }}</template>
    </a-card-meta>
  </a-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  title: String,
  imgSrc: String,
  update: String,
});
const title = ref(props.title);
const imgSrc = ref(props.imgSrc);
const update = ref(props.update);
</script>
