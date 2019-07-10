<template>
  <div>
    <van-tabs v-model="active" class="hotmoveis" @click="btn1" sticky>
      <van-tab title=" 正在热映"></van-tab>
      <van-tab title=" 即将热映"></van-tab>
    </van-tabs>

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="film-list-content">
        <div class="comingSoon-wrap">
          <ul class="comingSoon">
            <li
              class="comingSoonFilm-item"
              v-for="(item,index ) in moviesLists"
              :key="item.id"
              @click="movies(item.filmId)"
            >
              <div class="lazy-img-wrap">
                <img :src="item.poster" alt />
              </div>
              <div class="comingSoonFilm-info">
                <div class="comingSoonFilm-info-span">
                  <span>{{ item.name }}</span>
                  <span>{{ item.filmType.name }}</span>
                </div>
                <div class="comingSoonFilm-grade">&nbsp;</div>
                <div class="comingSoonFilm-actors over-hiden">
                  <span class="labels">主演：{{ moviesList[index].name }}</span>
                </div>
                <div class="comingSoonFilm-detail">
                  <span>上映日期：{{ times(item.premiereAt) }}</span>
                </div>
                <div class="comingSoonFilm-buy">
                  <span v-if="item.isPresale">预售</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </van-pull-refresh>

    <router-view></router-view>
  </div>
</template>

<script>
import $ from "jquery";
import { Toast, PullRefresh, List } from "vant";
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "",

  data() {
    return {
      list: [],
      nameList: [],
      str: "",
      moviesList: [],
      nameLists: [],
      isLoading: false,
      curFilmType: 2,
      pageNum: 1,
      pageSize: 13,
      total: 1,
      active: 1,
      moviesLists: [],
      disabled: false
    };
  },
  computed: {
    ...mapState("films", ["loading", "finished"])
  },

  methods: {
    btn1(index, title) {
      if (index == 0) {
        this.$router.push("/moveislist/bottom");
        this.active = 0;
        this.$store.state.films.loading = false;
        Toast.clear();
      } else if (index == 1) {
        this.$router.push("/moveislistes/bottom");
        this.active = 1;
        this.$store.state.films.loading = false;
        Toast.clear();
      }
    },
    movies(id) {
      this.$router.push(`/filmDetail/${id}`);
    },
    onRefresh() {
      var self = this;
      if (this.total == this.moviesLists.length) {
        setTimeout(() => {
          self.$toast("没有了，宝贝");
          self.isLoading = false;
        }, 500);
      } else {
        Toast.loading({ duration: 0, message: "加载中..." });
        var cityId = window.localStorage.getItem("curCityId")?  window.localStorage.getItem("curCityId") : 110100;
        console.log(cityId);
        if ((this.total - this.moviesLists.length) / this.pageSize >= 1) {
        } else {
          this.pageSize = this.total - this.moviesLists.length;
        }
        axios
          .get(
            `https://m.maizuo.com/gateway?cityId=${cityId}&pageNum=${this
              .pageNum + 1}&pageSize=${this.pageSize}&type=2&k=223101`,
            {
              headers: {
                "X-Client-Info":
                  '{"a":"3000","ch":"1002","v":"5.0.4","e":"15605021417275674601907"}',
                "X-Host": "mall.film-ticket.film.list"
              }
            }
          )
          .then(res => {
            if (status == 0) {
              Toast.clear();
              this.list = res.data.data.films;
              for (let j = 0; j < this.list.length; j++) {
                this.moviesLists.push(this.list[j]);
              }
              // console.log(this.moviesLists);
              this.nameList = this.list[0].actors;
              for (var y = 0; y < this.list.length; y++) {
                this.str = "";
                if (this.list[y].actors) {
                  for (var i = 0; i < this.list[y].actors.length; i++) {
                    this.str += this.list[y].actors[i].name;
                    this.str += " ";
                  }
                }
                this.str = { name: this.str };
                this.moviesList.push(this.str);
                this.str = "";
                this.$toast("刷新成功");
                this.isLoading = false;
              }
            }
          });
      }
    },
    times(data) {
      var time = new Date(1562284800000);
      var m = time.getMonth() + 1;
      var d = time.getDate();
      var w = time.getDay();
      var n = "";
      switch (w) {
        case 1:
          n = "一";
          break;
        case 2:
          n = "二";
          break;
        case 3:
          n = "三";
          break;
        case 4:
          n = "四";
          break;
        case 5:
          n = "五";
          break;
        case 6:
          n = "六";
          break;
        case 7:
          n = "天";
          break;
      }
      return "周" + n + " " + m + "月" + d + "日";
    }
  },

  mounted() {
    // this.$store.state.films.loading = "true";
    // this.$store.state.loading=true;
    // https://m.maizuo.com/gateway?cityId=220600&pageNum=1&pageSize=10&type=2&k=248438
    // https://m.maizuo.com/gateway?type=2&cityId=220600&k=3051243
    // https://m.maizuo.com/gateway?cityId=${cityId}&pageNum=${this.pageNum}&pageSize=${this.pageSize}&type=2&k=223101
   var cityId = window.localStorage.getItem("curCityId")?  window.localStorage.getItem("curCityId") : 110100;
    Toast.loading({ duration: 0, message: "加载中..." });
    axios
      .get(
        `https://m.maizuo.com/gateway?cityId=${cityId}&pageNum=${this.pageNum}&pageSize=${this.pageSize}&type=2&k=223101`,
        {
          headers: {
            "X-Client-Info":
              '{"a":"3000","ch":"1002","v":"5.0.4","e":"15605021417275674601907"}',
            "X-Host": "mall.film-ticket.film.list"
          }
        }
      )
      .then(res => {
        if (status == 0) {
          this.total = res.data.data.total;
          this.list = res.data.data.films;
          this.moviesLists = this.list;
          // console.log(this.list);
          this.nameList = this.list[0].actors;
          for (var y = 0; y < this.list.length; y++) {
            this.str = "";
            if (this.list[y].actors) {
              for (var i = 0; i < this.list[y].actors.length; i++) {
                this.str += this.list[y].actors[i].name;
                this.str += " ";
              }
            }
            this.str = { name: this.str };
            this.moviesList.push(this.str);
            this.str = "";
            this.$store.state.films.loading = false;
            Toast.clear();
          }
        }
      });
  }
};
</script>

<style lang="scss"  >
@import "../assets/px2rem.scss";
@import "../assets/reset.css";
.comingSoonFilm-item {
  position: relative;
  display: flex;
}

.lazy-img-wrap {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: px2rem(95);
  height: px2rem(134);
  background: rgb(249, 249, 249);
  float: left;
}

.lazy-img {
  width: 100%;
}

.comingSoonFilm-info {
  font-size: 16px;
  padding: 0 0.625rem;
  text-align: left;
}

.comingSoon {
  list-style: none;
  padding: 0;
  margin-left: 15px;
  margin-bottom: 50px;
  margin-top: 0;
  display: block;
}
.comingSoonFilm-info-span span:first-child {
  color: #191a1b;
}

.comingSoonFilm-item {
  position: relative;
  display: flex;
  padding: px2rem(15) 15px 15px 0;
}

.comingSoonFilm-info-span span:last-child {
  color: #fff;
  font-size: 9px;
  background: #d2d6dc;
  height: 14px;
  line-height: 14px;
  padding: 0 2px;
  border-radius: 2px;
}

.comingSoonFilm-actors span:first-child {
  color: #797d82;
  font-size: 13px;
}

.comingSoonFilm-detail span:first-child {
  color: #797d82;
  font-size: 13px;
}

.comingSoonFilm-buy span {
  position: absolute;
  width: 2.125rem;
  height: 1.3625rem;
  border: 1px solid #ffb232;
  font-size: 13px;
  padding-left: 0.75rem;
  padding-top: 0.3125rem;
  color: #ffb232;
  top: 0.9375rem;
  right: 1.25rem;
}

.labels {
  font-size: 13px;
  margin-top: 4px;
  color: #797d82;
  white-space: nowrap;
}

.over-hiden {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
}
</style>
