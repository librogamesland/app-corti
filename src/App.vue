<template>
  <component :is="store.page"/>
</template>
<style>

.btn-rounded {
  padding: 14px 18px;
  border-top-left-radius: 185px 160px;
  border-top-right-radius: 200px 195px;
  border-bottom-right-radius: 160px 195px;
  border-bottom-left-radius: 185px 190px;
  margin: 0;
  -webkit-tap-highlight-color: transparent;
}

html, body, #app {
  height: 100%;
  overscroll-behavior: contain;
}
body, #app{
  display: flex !important;
  flex-direction: column;
  flex: 1 0 0px;
}

.col{
  padding: 0px 0px;
}

nav {
    border-bottom-left-radius: 2px 5px;
    border-bottom-right-radius: 20px 3px;
    border-color: var(--primary);
    border-style: solid;
    border-width: 0;
    border-bottom-width: 2px;
    display: flex !important;
    flex-direction: row;
    user-select: none;
}

nav, nav > * {
  box-sizing: border-box;
  padding: 0 5px;
  margin-top: 0px;
  margin-bottom: 0px;
  display: inline-block;
}

nav > * {
  line-height: 56px !important;
}

nav > h1 {
  line-height: 20px !important;
  padding: 18px 8px;
}

nav > i, nav > .form-group {
    padding: 0 calc(6px + 3vw) !important;
}

nav > h1 {
  flex: 1 1 0px;
  text-overflow: ellipsis;
  font-size: 25px;
}
</style>
<script>
import {store} from './store.js'
import PageHome     from './components/PageHome.vue'
import PageBook     from './components/PageBook.vue'
import PageSettings from './components/PageSettings.vue'


export default {
  data: () => ({store}),
  components: { PageHome, PageBook, PageSettings },
}
</script>