<template>
  <div :class="`page-book ${showNotes ? 'show-notes' : ''}`">
    <nav>
      <i @click="store.page = 'PageHome'" class="zmdi zmdi-home"></i>
      <select @change="
       store.visited.push($event.target.value)
      ">
        <option v-for="key in Object.keys(book.chapters).sort( (a, b) => {

            if(isNaturalNumber(a) && !isNaturalNumber(b)) return +1 
            if(!isNaturalNumber(a) && isNaturalNumber(b)) return -1 

            return a.localeCompare(b)
          })" 
          :key="key"
          :value="key"
          :selected="key == chapterKey"
        >{{chapterTitle(key)}}</option>
      </select>
      <h1 style="padding: 0 !important"></h1>
      <i class="zmdi zmdi-rotate-right" 
        v-if="store.visited.length > 1"
        @click="store.visited.pop()"  
      ></i>

      <div class="form-group">
        <label for="paperChecks1" class="paper-check">
          <span style="padding-right: 4px"> <i class="zmdi zmdi-edit"></i></span>
          <input type="checkbox" name="paperChecks" id="paperChecks1" v-model="showNotes"> 
          <span></span>
        </label>
      </div>
      

    </nav>
    <v-runtime-template
      :template="`<div class='book-content'>${book.chapters[chapterKey].text}</div>`">
    </v-runtime-template>
    <div class="book-notes" v-show="showNotes">
      <div class="row">
        <div class="col-fill col"><mage-counter>Combattività</mage-counter></div>
        <div class="col-fill col"><mage-counter>Resistenza</mage-counter></div>
        <div class="col-fill col"><mage-counter>Spirito</mage-counter></div>
      </div>
      <div class="row">
        <div class="col-9 col">
          <textarea placeholder="Inserisci note/oggetti..." style="line-height: 1.15; background-color: rgba(255,255,255,0.5); height: 160px; margin: 0 5px; padding: 8px; width: 100%;"/>
        </div>
        <div class="col-3 col" style="text-align:center">
          <mage-dice></mage-dice>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

  .page-book {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  nav .form-group, nav .form-group .paper-check {
    margin: 0 !important;
    padding: 0 !important;
  }

  nav .form-group .paper-check input+span {
    display: inline-block;
  }

  nav select {
    margin-top: 4px;
    height: 52px !important;
    line-height: 56px !important;
    border: none !important;
    font-size: 22px;
    text-overflow: ellipsis;
    max-width: calc(75vw - 110px);
  }

  nav select option {
    max-width:120px;
    overflow:hidden;
  }

  .book-content {
    padding: 20px 16px;
    padding-bottom: 100px;
    flex: 1 0 0px;
    overflow-y: auto;
  }

  .show-notes .book-content {
        margin-bottom: -40px
  }

  .book-content ul, .book-content ol{
      margin-block-start: 0px;
  }

  .book-content li {
    margin-bottom: 4px;
  }

  .book-content, .book-content a  {
    font-family: Arial !important;
    background: none;
    line-height: 140%;
  }
  .book-content br {
      content: "";
    height: 16px;
    display: block;
  }

  .book-notes {
    z-index: 100;
    min-height: 100px;
    padding: calc(10px + 3vw) 5px 0 5px;
    background-size: cover;
    background-image: url(../assets/res/paper.png);
    background-position-y: top;
    background-repeat-y: no-repeat;
    overscroll-behavior: contain;

  }
</style>

<script>
import { nextTick } from 'vue'
import {store} from '../store.js'
import book from '../corti/2008/01-La-trappola.md'
import VRuntimeTemplate from "vue3-runtime-template"
import MageLink from './MageLink.vue'
import MageDice from './MageDice.vue'
import MageCounter from './MageCounter.vue'


const isNaturalNumber = (str) => {
    let pattern = /^(0|([1-9]\d*))$/;
    return pattern.test(str);
}


export default {
  data: () => ({
    showNotes: false,
    store, book
  }),
  methods: {
    isNaturalNumber,
    log: console.log,
    chapterTitle: function(chapterKey)  {
      let title = this.book.chapters[chapterKey].title || chapterKey
      title = title.trim()
      return isNaturalNumber(title) ? `Par. ${title}` : title
    },
  },
  computed: {
    chapterKey: function(){
      return this.store.visited[this.store.visited.length - 1]
    },
  },

  watch: {
    showNotes: function(){
      const t = document.querySelector('.book-content').scrollTop
      nextTick( () => {
        document.querySelector('.book-content').scrollTop = t
      })
    }
  },
  components: {
    VRuntimeTemplate, 
    MageLink, MageDice, MageCounter,
  },
}
</script>
