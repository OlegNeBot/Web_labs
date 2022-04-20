<template>
  <div class="cont">
      <div class="left-aside">
          <side-menu></side-menu>
      </div>
      <div class="main-part">
        <main-comp></main-comp>
      </div>
      <div class="right-aside">
        <right-part></right-part>
      </div>
  </div>
</template>

<script>
import MainComp from './main-comp.vue';
import RightPart from './right-part.vue';
import sideMenu from './side-menu.vue';

export default {
  components: {
    sideMenu, RightPart, MainComp, 
  },

};
</script>

<style>

</style>
