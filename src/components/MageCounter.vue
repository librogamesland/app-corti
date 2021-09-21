<template>
  <div class="mage-note-number">
    <div class="content"><slot></slot></div>
    <div class="counter">
      <i class="zmdi zmdi-minus" @click="number--"/>{{number}}<i class="zmdi zmdi-plus" @click="number++"/>
    </div>
  </div>
</template>
<script>
  import {store} from '../store.js'
  export default {
    data: () => ({
      store,
      number: 14,  
    }),
    props: ['key', 'min', 'max'],
  }
</script>
<style>
  .mage-note-number {
    text-align: center !important;
  }
  .mage-note-number .content{
    font-weight: bold;
    text-decoration: underline;
  }

  .mage-note-number .counter{
    padding: 0px;
    font-size: 26px;
    user-select: none;
  }
  .mage-note-number .counter i{
    padding: 8px;
    font-weight: bold;

  }

</style>
