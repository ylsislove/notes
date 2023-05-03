<template>
  <a-card hoverable style="width: 240px; margin: 20px;"  @click.stop="clickHandler">
    <template #cover>
      <img :alt="title" :src="imgSrc" style="width: 240px; height: 244px; object-fit: cover;"/>
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
  path: String,
});
const title = ref(props.title);
const imgSrc = ref(props.imgSrc);
const update = ref(props.update);



const clickHandler = () => {
  console.log(props.path);
  // 跳转到其他页面
  window.location.href = props.path as string;
};
</script>

<style>
.ant-card-meta-title {
  width: 190px;
}
.medium-zoom-image {
  cursor: pointer !important;
}
</style>
