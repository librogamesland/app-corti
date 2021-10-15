<template>
  <div class="page-book">
    <nav>
      <i @click="app.page = 'PageHome'" class="pointer zmdi zmdi-settings"></i>
      <select class="pointer" @change="
       save.history.push($event.target.value)
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
      <i class="pointer zmdi zmdi-rotate-right" 
        v-if="save.history.length > 1"
        @click="save.history.pop()"  
      ></i>

      <div class="form-group">
        <label for="paperChecks1" class="paper-check">
          <span> <i class="zmdi zmdi-edit" style="padding-right: 4px !important"></i></span>
          <input type="checkbox" name="paperChecks" id="paperChecks1" v-model="save.notes"> 
          <span></span>
        </label>
      </div>
      

    </nav>
    <v-runtime-template
      :template="`<div class='book-content'>${book.chapters[chapterKey].text}</div>`">
    </v-runtime-template>
    <div class="book-notes" v-show="save.notes">
      <div class="row">
        <div class="col-fill col"><mage-counter save="com" :min="0" :max="30" :default="10">Combattività</mage-counter></div>
        <div class="col-fill col"><mage-counter save="res" :min="0" :max="30" :default="20">Resistenza</mage-counter></div>
        <div class="col-fill col"><mage-counter save="spi" :min="0" :max="30" :default="10">Spirito</mage-counter></div>
      </div>
      <div class="row">
        <div class="col-9 col">
          <MageTextarea/>
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
    padding-bottom: 70px;
    flex: 1 0 0px;
    overflow-y: auto;
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
    padding: 25px 5px 0 5px;
    background-image: url(../assets/res/paper.png);
    background-position-y: top;
    overscroll-behavior: contain;
    -webkit-box-shadow:0px 0px 16px 0px #8b8b8b;
    box-shadow: 0px 0px 16px 0px #8b8b8b;
        background-color: #e3e0de;

  }

  @media only screen and (min-width: 760px){
    .book-notes, .page-book .book-content, nav {
      padding-left: calc( 50vw - 380px );
      padding-right: calc( 50vw - 380px );
    }
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
import MageTextarea from './MageTextarea.vue'


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
    chapterTitle(chapterKey)  {
      let title = this.book.chapters[chapterKey].title || chapterKey
      title = title.trim()
      return isNaturalNumber(title) ? `Par. ${title}` : title
    },
  },
  computed: {
    chapterKey(){
      return this.save.history[this.save.history.length - 1]
    },
    save(){ return this.store.save  },
    app(){  return this.store.app   },
  },

  watch: {
    "save.notes" : function(){
      const t = document.querySelector('.book-content').scrollTop
      nextTick( () => {
        document.querySelector('.book-content').scrollTop = t
      })
    }
  },
  components: {
    VRuntimeTemplate, 
    MageLink, MageDice, MageCounter, MageTextarea
  },
}
</script>
