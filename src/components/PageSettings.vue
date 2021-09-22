<template>
  <h1>Work in progress!</h1>
  <button @click="store.app.page='PageHome'">Torna alla home</button>
</template>

<script>
import {store} from '../store.js'

export default {
  data: () => ({store}),
}
</script>