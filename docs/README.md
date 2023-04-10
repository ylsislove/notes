---
home: false
title: 笔记
footer: MIT Licensed | Copyright © 2023 WangYu
---

<div class="container">
  <div class="container-item" v-for="(item) in notes">
    <Note :title="item.title" :imgSrc="item.imgSrc" :update="item.update" :path="item.path"/>
  </div>
</div>

<script setup>
import { ref } from 'vue'

const notes = ref([]);
notes.value = [
    {
        title: '基础汉英类义词典-音频版',
        imgSrc: './img/cover.jpg',
        update: '2023-04-09 04:28:32',
        path: 'https://study.aayu.today/thesaurus/'
    },{
        title: '全栈学习笔记',
        imgSrc: './img/cover2-2-2.jpg',
        update: '2023-04-09 04:30:07',
        path: 'https://study.aayu.today/fullstack/'
    },
]
</script>

<style>
  .page .theme-default-content {
    max-width: 60%;
    margin-top: 3vw;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .container .container-item {
    min-width: 25%;
    display: flex;
    justify-content: center;
  }
</style>
