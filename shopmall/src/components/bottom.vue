<template>
  <div class="bottom">
    <ul class="bottom-list" >
      <li :class="{'active' : curPage == 'home'}" v-on:click=" curPage = 'home' ">
        <router-link to="/moveislist/bottom">
          <span>
            <img src="../assets/movies.png" alt />
          </span>
          <p>电影</p>
        </router-link>
      </li>
      <li :class="{'active' : curPage == 'family'}" v-on:click=" curPage = 'family' " >
        <router-link to="/cinemas/bottom">
          <span>
            <img src="../assets/img.png" alt />
          </span>
          <p>影院</p>
        </router-link>
      </li>
      <li :class="{'active' : curPage == 'love'}" v-on:click=" curPage = 'love' ">
        <router-link to="/favorable/bottom">
          <span>
            <img src="../assets/favorable.png" alt />
          </span>
          <p>优惠</p>
        </router-link>
      </li>
      <li  :class="{'active' : curPage == 'my'}" v-on:click=" curPage = 'my' ">
        <router-link to="/login/bottom">
          <span>
            <img src="../assets/my.png" alt />
          </span>
          <p>我的</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",

  data() {
    return {
      curPage:'home'
    };
  },

  methods: {}
};
</script>

<style>
.bottom-list {
  width: 100%;
  /* width:375px; */
  position: fixed;
  bottom: 0;
  display: flex;
  padding: 0;
  margin: 0;
  margin-bottom: px2rem(-2);
  z-index: 100;
  background: #fff;
  list-style: none;
  text-align: center;
}
.active {
  display: block;
  color: #ff5f16;
}
.bottom-list li {
  width: 100%;
  height: 3.0625rem;
  float: left;
  line-height: 1.75rem;
  position: relative;
  color: #797d82;
  bottom: 0;
}

.bottom-list li a {
  line-height: 1.75rem;
  outline: none;
}
.bottom-list li span img {
  width: 1.3125rem;
  height: 1.3125rem;
  padding-top: 0.5rem;
}
.bottom-list p {
  width: 100%;
  font-size: 10px;
  margin-top: -0.6125rem;
  color: #797d82;
}
</style>
