<template>
  <div class="main">
    <div class="film">
      <div class="film-header">
        <div class="goBack">
          <router-link to="/moveislist/bottom">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
              alt
            />
          </router-link>
        </div>
      </div>
      <div class="lazy-img">
        <div class="lazy-img-wraps" v-if="list.poster">
          <img :src="list.poster" alt />
        </div>
        <div class="film-detail">
          <div class="col">
            <div class="film-name">
              <span class="name">{{ list.name }}</span>
              <span class="item" v-if="list.filmType">{{ list.filmType.name }}</span>
            </div>
            <div class="film-grade">
              <span class="grade">{{ list.grade }}</span>
              <span class="grade-text" v-if="list.grade">分</span>
            </div>
          </div>
          <div class="film-category grey-text">{{ list.category }}</div>
          <div class="film-premiere-time grey-text">{{ data(list.premiereAt*1000) }}上映</div>
          <div class="film-nation-runtime grey-text">{{ list.nation }} | {{ list.runtime }}分钟</div>
          <div class="film-synopsis">{{ list.synopsis }}</div>
          <div class="toggle">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAMAAADHqI+lAAAAOVBMVEVHcEy9xcW9wMW9wcW////Bwca9wcW9wMW9wMW+wMW+wcW9wcXMzMy+wMa+wce9wMe9wca9wMW9wMWKU/2FAAAAEnRSTlMAH+jGBDa6/vaatcIPdlNSdckJHB8JAAAASUlEQVQIHQXBhwGDMAADMCVksQr4/2MrObYCQNkOZ2oH6DWna2Q9wG9lXLQ984V3Zm/gntlb2zNvgN/KGFkPAL0mtQNA+b4C/AGl4gJfgEWzrAAAAABJRU5ErkJggg=="
              alt
              class="upper"
              @click="togglestory"
            />
          </div>
        </div>

        <div class="actors">
          <div class="actors-title-bar">
            <span class="actors-title-text">演职人员</span>
          </div>
          <div class="row-scroll-wrapper">
            <ul class="row-scroll-items-nav">
              <li class="row-scroll-item" v-for="item in list.actors" :key="item.id">
                <div class="actors-item">
                  <div class="lazy-img">
                    <div class="padding">
                      <img :src="item.avatarAddress" alt />
                    </div>
                  </div>
                  <span class="actors-name">{{ item.name }}</span>
                  <span class="actors-role">{{ item.role }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="photos">
          <div class="photos-title-bar">
            <span class="photos-title-text">剧照</span>
            <span class="photos-to-all" @click.prevent="filmsImgs">
              全部({{ list.photos ? list.photos.length : 0 }})
              <i>
                <img sr="../assets/pull-down3.png" />
              </i>
            </span>
          </div>
          <div class="row-scroll-wrapper">
            <ul class="row-scroll-items-nav">
              <li class="row-scroll-item" v-for="items in list.photos" :key="items.id">
                <div class="paddings">
                  <img :src="items" alt v-on:click="btnImg"/>
                  <!-- <van-image-preview v-model="show" :images="list.photos" @change="onChange">
                    <template v-slot:index>第{ index }页</template>
                  </van-image-preview> -->
                </div>
              </li>
            </ul>
          </div>
        </div>
        <a class="guopiao">
          <div class="goSchedule">选座购票</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ImagePreview } from "vant";
import $ from "jquery";

export default {
  data() {
    return {
      list: [],
      photos: 0,
      ID: "",
      show: false,
      index: 0,
      ImagePreview: [],
      flag: 1
    };
  },

  methods: {
    data(datas) {
      var t = new Date(datas).getTime();
      t = new Date(t);
      var year = t.getFullYear();
      var month = t.getMonth() + 1;
      var date = t.getDate();

      return year + "-" + month + "-" + date;
    },
    onChange(index) {
      this.index = index;
    },
    btnImg() {
      ImagePreview(this.ImagePreview);
    },
    filmsImgs() {
      this.$router.push(`/filmDetailImg/${this.ID}`);
    },
    togglestory() {
      this.flag++;
      console.log("我是"+this.flag);
        if (this.flag %2 == '0') {
          console.log(1);
          $(".film-synopsis").eq(0).addClass("hidden","upper");
        } else {
          console.log(2);
          $(".film-synopsis").eq(0).removeClass("hidden","upper");
        }
    }
  },

  created() {
    // let id = this.$route.params.id;
    // console.log(this.$route.query.id);
    // let ids = this.$route.query.id;
    // console.log(ids);
  },

  mounted() {
    this.ID = this.$route.params.id;
    axios
      .get("https://m.maizuo.com/gateway?", {
        params: {
          filmId: this.$route.params.id,
          k: 5705222
        },
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"15605021417275674601907"}',
          "X-Host": "mall.film-ticket.film.info"
        }
      })
      .then(res => {
        if (status == 0) {
          this.list = res.data.data.film;
          this.ImagePreview = this.list.photos;
          // console.log(this.ImagePreview);
          // console.log(res.data.data.film.filmType.name);
        }
      });
  }
};
</script>

<style>
.main {
  height: 100%;
}

body {
  margin: 0;
  overflow-x: hidden;
  background-color: #f4f4f4;
}

div {
  box-sizing: border-box;
}

.film-header {
  background-color: hsla(0, 0%, 100%, 0);
  color: transparent;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  width: 6.25rem;
  height: 2.75rem;
  z-index: 1;
}
.hidden {
  height: 266px !important;
  overflow: hidden;
}
.goBack img {
  width: 30px;
  height: 1.875rem;
  position: absolute;
  left: 0.3125rem;
  z-index: 999;
  top: 10px;
}

.lazy-imgs img {
  width: 100%;
  background: rgb(249, 249, 249);
  position: relative;
}

.lazy-img-wraps img {
  width: 100%;
  background: rgb(249, 249, 249);
  opacity: 1;
  display: block;
  position: absolute;
  overflow: hidden;
  top: 0;
}

.film-detail {
  padding: 15px;
  padding-top: 172px;
  background-color: #fff;
}

.col {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 30px;
}

.film-name {
  width: 256px;
  text-align: left;
}

.name {
  color: #191a1b;
  font-size: 18px;
  height: 24px;
  margin-right: 7px;
}

.item {
  font-size: 9px;
  color: #fff;
  background-color: #d2d6dc;
  height: 14px;
  line-height: 14px;
  padding: 0 2px;
  border-radius: 2px;
  display: inline-block;
}

.film-category {
  font-size: 13px;
  color: #797d82;
  margin-top: 4px;
  text-align: left;
}

.film-premiere-time {
  font-size: 13px;
  color: #797d82;
  margin-top: 4px;
  text-align: left;
}

.film-nation-runtime {
  font-size: 13px;
  color: #797d82;
  margin-top: 4px;
  text-align: left;
}

.film-grade {
  width: calc(100% - 250px);
  text-align: right;
  color: #ffb232;
}

.grade {
  font-size: 18px;
  font-style: italic;
  text-align: right;
  color: #ffb232;
}

.grade-text {
  font-size: 10px;
  text-align: right;
  color: #ffb232;
}

.film-synopsis {
  height: 38px;
  overflow: hidden;
  transition: height 0.5s ease;
  margin-top: 12px;
  font-size: 13px;
  color: #797d82;
  display: block;
}

.toggle {
  width: 12px;
  margin: auto;
  text-align: center;
  line-height: normal;
}

.upper {
  transform: rotate(180deg);
}

.row-scroll-items-nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
  margin: 0;
  padding-left: 15px;
  list-style: none;
}

.actors-item {
  text-align: center;
  cursor: pointer;
}

.padding {
  width: 85px;
  height: 85px;
  background: rgb(249, 249, 249);
  display: flex;
  justify-content: center;
  align-items: center;
}

.actors-name {
  display: block;
  text-align: center;
  font-size: 12px;
  color: #191a1b;
  width: 85px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.actors-role {
  display: block;
  text-align: center;
  font-size: 10px;
  color: #797d82;
  cursor: pointer;
}

.actors-title-bar {
  width: 100%;
  padding: 15px;
  text-align: left;
}

.actors-title-text {
  font-size: 16px;
  color: #191a1b;
  display: inline-block;
  height: 22.5px;
  line-height: 22px;
}

.actors {
  margin-top: 10px;
  background-color: #fff;
}

.photos {
  margin-top: 10px;
  margin-bottom: 60px;
  background-color: #fff;
}

.photos-title-bar {
  height: 62px;
  width: 100%;
  padding: 15px;
}

.photos-title-text {
  font-size: 16px;
  float: left;
  color: #191a1b;
}

.photos-to-all {
  font-size: 13px;
  color: #797d82;
  float: right;
}

.row-scroll-wrapper {
  height: 115px;
  background: rgb(255, 255, 255);
  overflow-x: auto;
  overflow-y: hidden;
}

.row-scroll-items-nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
}

.row-scroll-item {
  margin-right: 10px;
  cursor: pointer;
  display: block;
  float: left;
}

.padding {
  width: 85px;
  height: 85px;
  background: rgb(249, 249, 249);
}

.padding img {
  width: 64px;
}

.lazy-img {
  background: rgb(249, 249, 249);
}

.actors-name {
  display: block;
  text-align: center;
  font-size: 12px;
  color: #191a1b;
  width: 85px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.actors-role {
  display: block;
  text-align: center;
  font-size: 10px;
  color: #797d82;
}

.photos-item {
  box-sizing: border-box;
}

.lazy-img {
  background: #f9f9f9;
}

.paddings {
  width: 150px;
  height: 100px;
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
}

.paddings img {
  width: 150px;
  height: 100px;
  position: relative;
}

.guopiao {
  height: 49px;
  position: fixed;
  bottom: 0px;
  width: 100%;
}

.goSchedule {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 49px;
  width: 100%;
  text-align: center;
  background-color: #ff5f16;
  color: #fff;
  font-size: 16px;
  line-height: 49px;
}
</style>
