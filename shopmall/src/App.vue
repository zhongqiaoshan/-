<template>
   
  <div id="app">
    <keep-alive :include="['home']">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",

  methods: {
    ...mapActions("city", ["getCities"])
  },

  created() {
    // 判断本地存储中是否有 cities 的数据，如果有就不发送请求
    // let cities = window.localStorage.getItem("cities");
    // if (!cities) {
    //   this.getCities();
    // }
    this.getCities();
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateY(20px);
}
.van-swipe__indicator--active{
  background: black;
}
</style>
