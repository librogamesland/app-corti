<template>
  <div class="mage-note-number">
    <div class="content"><slot></slot></div>
    <div class="counter">
      <i class="zmdi zmdi-minus" @click="data[save]--"/>{{data[save]}}<i class="zmdi zmdi-plus" @click="data[save]++"/>
    </div>
  </div>
</template>
<script>
  import {store} from '../store.js'
  export default {
    data: () => ({ store, }),

    computed : {
      data(){
        if(!this.store.save[this.save]) this.store.save[this.save] = this.default || 0
        return this.store.save
      },
    },
    props: ['save', 'min', 'max', 'default'],
  }
</script>
<style>
  .mage-note-number {
    user-select: none;
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
    cursor: pointer;
  }

</style>
