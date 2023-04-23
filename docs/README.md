---
home: true
heroText: null
tagline: null
title: 笔记
footer: © 2020 – 2023 🌸 宇凌喵 @ Aayu Yain<br><br>🪧 晋ICP备19006357号-4
footerHtml: true
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
    },{
        title: '书籍阅读',
        imgSrc: './img/cover3.jpg',
        update: '2023-04-22 22:22:08',
        path: 'https://study.aayu.today/books/'
    },
]
</script>

<style>
  body {
    background-image: url("/img/bg.png");
    background-attachment: fixed;
  }
  .home {
    padding: 60px 0 0 0; 
    margin: 0;
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-image: url("/img/bg.png");
    background-attachment: fixed;
  }
  .home .theme-default-content {
    max-width: 60%;
    min-height: 72vh;
    margin: 3vw 20% 2vw 20%;
  }
  .home .footer {
    padding: 1.5rem;
    border-top: unset;
  }
  .container {
    width: 100%;
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
