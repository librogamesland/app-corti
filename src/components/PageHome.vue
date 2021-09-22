<template>
  <main class="page-home">
    <a style="color: #000">
      <h2 style="margin:0px">I corti di <img alt="LGL" src="./assets/res/logo.jpg" style="width: 3.5rem; display: inline-block"/></h2>
      <h4 style="margin-top:5px; margin-bottom: 6vh">Concorso di narrativa a bivi</h4>
      
    </a>

    <button disabled><i class="zmdi zmdi-file-text"></i> Continua lettura</button><br>
    <button @click="store.app.page = 'PageBook'"><i class="zmdi zmdi-plus"></i> Nuova partita</button><br>
    <button @click="store.app.page = 'PageSettings'"><i class="zmdi zmdi-settings"></i> Impostazioni</button><br>
    <p style="margin-top: 12vh;">
      <a style="color: var(--secondary) !important;" target="_blank" href="https://librogamesland.github.io/corti">Scopri di più <i class="zmdi zmdi-open-in-new"></i></a>
    </p>
  </main>
</template>
<style>
.page-home{
  background-color:rgb(255, 255, 255);
  background-size: contain;
  background-image:url(../assets/res/background.jpg);
  background-position:left center;
  background-attachment:fixed;
  background-repeat-x:no-repeat;

  user-select: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 12vh;
  width: 100%;
  flex: 1 1 0px;
}

.page-home button{
  margin: 9px 7px;
  font-size: 24px;
}
</style>

<script>
import {store} from '../store.js'

export default {
  data: () => ({store}),
}
</script>
