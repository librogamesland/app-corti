<template>
  <textarea class="mage-textarea" :placeholder="placeholder || 'Inserisci note/oggetti...'"/>

</template>

<style>
  .mage-textarea {
    line-height: 1.15; 
    background-color: rgba(255,255,255,0.5); 
    height: 160px; 
    margin: 0 5px; 
    padding: 8px; 
    width: 100%;
  }
</style>
<script>
  import {store} from '../store.js'
  export default {
    data: () => ({
      store,
      number: 14,  
    }),
    beforeMount(){
    },
    computed : {
      data(){
        console.log(this.notes)
        if(!this.store.notes[this.notes]) this.store.notes[this.notes] = this.default
        return this.store.notes
      },
    },
    props: ['notes', 'placeholder', 'max', 'default'],
  }
</script>