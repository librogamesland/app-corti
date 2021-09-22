<template>
  <a class="mage-link" @click="store.save.history.push(to)">
    <slot></slot>
  </a>
</template>
<script>
  import {store} from '../store.js'
  export default {
    data: () => ({store}),
    props: ['to'],
  }
</script>
<style>
  .mage-link {
    font-weight: bold;
    text-decoration: underline;
    color: blue;
    cursor: pointer;
  }
</style>
