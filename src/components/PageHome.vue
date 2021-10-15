<template>
  <main class="page-home">
    <a style="color: #000;" target="_blank" href="https://librogamesland.github.io/corti">
      <h2 style="margin:0px">I corti di <img alt="LGL" src="./icon.png" style="width: 70px; height: 70px; transform: translateY(13px); display: inline-block"/></h2>
      <h4 style="margin-top: 0px; margin-bottom: 13px">Concorso di narrativa a bivi</h4>
      <div style="color: var(--secondary) !important; margin-bottom: 26px; font-size: 23px"><u>librogame.net <i class="zmdi zmdi-open-in-new"></i></u></div>
    </a>

    <select style="width: 100%; background-color: rgba(210, 210, 210, 0.65)">
        <option key="ch" value="ch" selected>Introduzione</option>
        <option key="2021" value="2021">Corto casuale</option>
        <option key="2021" value="2021">Edizione 2020</option>
        <option key="2021" value="2021">Edizione 2019</option>
        <option key="2021" value="2021">Edizione 2018</option>
        <option key="2021" value="2021">Edizione 2017</option>
        <option key="2021" value="2021">Edizione 2020</option>
        <option key="2021" value="2021">Edizione 2019</option>
        <option key="2021" value="2021">Edizione 2018</option>
        <option key="2021" value="2021">Edizione 2017</option>
        <option key="2021" value="2021">Edizione 2019</option>
        <option key="2021" value="2021">Edizione 2018</option>
        <option key="2021" value="2021">Edizione 2017</option>
        <option key="2021" value="2021">Edizione 2020</option>
        <option key="2021" value="2021">Edizione 2019</option>
        <option key="2021" value="2021">Edizione 2018</option>
        <option key="2021" value="2021">Edizione 2017</option>

    </select>
    <div class="home-content">
      <p>In quest'app sono raccolti gli oltre 100 racconti-gioco che, negli anni,
        hanno partecipato al concorso <a target="_blank" href="https://librogamesland.github.io/corti">“I Corti di Librogame's Land”</a>.</p> 
      <p>Sono racconti a bivi, in cui <strong>chi legge diventa protagonista</strong> e può scegliere come proseguire. Spesso presentano anche enigmi e un regolamento di gioco.</p> 
      <p>L'app ti aiuterà nel prendere appunti <i class="zmdi zmdi-edit"></i>, ma verrà mantenuta l'esperienza originale: 
      <strong>sarai tu a dover aggiornare i punteggi</strong>, così come si fa per i libri-gioco cartacei.</p>
      <p><a style="font-size: 1.2rem"><strong>Inizia la lettura ora</strong></a>, o scopri di più sul concorso visitando
        <a target="_blank" href="https://librogamesland.github.io/corti">la pagina ufficiale</a>, 
        o il sito di <a target="_blank" href="http://librogame.net">Librogame's Land</a>!</p>

      <p style="text-align: center; font-size: 18px; margin-top: 80px">
        <a target="_blank" href="http://librogame.net">Informazioni sull'app</a>        
      </p>    
    </div>  
  </main>
</template>
<style>
.page-home{
  background-color:rgb(212, 212, 212);
  background-image:url(../assets/res/background.jpg);
  background-position: left center;

  user-select: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 10px 12px;
  width: 100%;
  flex: 1 1 0px;
}

@media only screen and (min-width: 760px){
  .page-home{
      background-position: center center;
      background-repeat-x: no-repeat;
      padding-left: calc( ( 100vw - 540px) / 2);
      padding-right: calc( ( 100vw - 540px) / 2);
  }
}

.page-home button{
  margin: 9px 7px;
  font-size: 24px;
}
@media only screen and (max-width: 300px){
  .page-home h2  {
    font-size: 50px;
  }

  .page-home h4 {
    font-size: 24px;
  }
}

.page-home .home-content {
  text-align: left;
}
.page-home .home-content, .page-home .home-content p, .page-home .home-content a {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 135%;
}

.page-home .home-content a {
  color: var(--secondary) !important;
  background-image: none;
  text-decoration: underline;
}

.page-home .home-content p {
  margin-block-start: 0.6rem;
  margin-block-end: 0rem;
}

</style>

<script>
import {store} from '../store.js'

export default {
  data: () => ({store}),
}
</script>
