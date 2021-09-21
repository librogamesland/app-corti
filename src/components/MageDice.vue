<template>
  <div class="paper-btn btn-rounded mage-dice" @click="roll">
    <span v-if="result">{{number}}</span>
    <img v-else src="./assets/res/dice.png" class="no-border">
  </div>
</template>
<script>
  export default {
    data: () => ({
      result: false,
      number: 1
    }),
    methods: {

      roll: function(){
        this.result = !this.result
        if(this.result){
          this.number = Math.ceil(Math.random()*6)
        }
      },
    },
    props: ['to'],
  }
</script>
<style>
.mage-dice {
  user-select: none;
  height: 65px !important;
  width: 70px !important;
  overflow: hidden;
}

.mage-dice span {
  line-height: 40px;
  font-size: 27px;
  font-weight: bold;
}
</style>
