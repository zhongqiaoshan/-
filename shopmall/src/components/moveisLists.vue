<template>
  <div>
    <van-tabs v-model="active" class="hotmoveis" sticky>
      <van-tab title=" 正在热映"></van-tab>
      <van-tab title=" 即将热映"></van-tab>
    </van-tabs>

    <van-pull-refresh v-model="$store.state.isLoading" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="film-list-content">
          <div class="comingSoon-wrap">
            <ul class="comingSoon">
              <li
                class="comingSoonFilm-item"
                v-for="item in list"
                :key="item.id"
                @click="moviess(item.filmId)"
              >
                <div class="lazy-img-wrap">
                  <img :src="item.poster" alt />
                </div>
                <div class="comingSoonFilm-info">
                  <div class="comingSoonFilm-info-span">
                    <span>{{ item.name }}</span>
                    <span>{{ item.filmType.name }}</span>
                  </div>
                  <div class="comingSoonFilm-grade">
                    <span>观众评分</span>
                    <span>{{ item.grade }}</span>
                  </div>
                  <div class="comingSoonFilm-actors over-hiden">
                    <span>主演：{{ moviesList[index].name || actorFormat }}</span>
                  </div>
                  <div class="comingSoonFilm-detail">
                    <span>{{ item.nation }} | {{ item.runtime }}分钟</span>
                  </div>
                  <div class="comingSoonFilm-buy">
                    <span>购票</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
    <router-view></router-view>
  </div>
</template>

<script>
import $ from "jquery";
import { Toast, PullRefresh } from "vant";
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
      nameLists: []
      // isLoading:''
    };
  },
  computed: {
    ...mapState("films", ["loading", "finished", "active"])

    // loadchangT: {
    //   get(){
    //     return this.$store.state.films.loading;
    //   },

    //   set(){
    //     this.$store.commit({
    //       type:"films/setloadtrue",
    //       loading:true
    //     })
    //   }
    // },
    // loadchangF: {
    //   get(){
    //     return this.$store.state.films.loading;
    //   },

    //   set(){
    //     this.$store.commit({
    //       type:"films/setloadfalse",
    //       loading:false
    //     })
    //   }
    // },
  },
  methods: {
    onRefresh() {},
    moviess(id) {
      this.$router.push(`/filmDetail/${id}`);
    },
    btn1(index, title) {
      if (index == 0) {
        this.$router.push("/moveislists/bottom");
        this.$store.state.films.active = 0;
        this.$store.commit("changActiveT", { can: 1 });
        this.$store.state.films.loading = false;
        Toast.clear();
      } else if (index == 1) {
        this.$router.push("/moveislist/bottom");
        this.$store.state.films.active = 1;
        this.$store.commit("changActiveF", { can: 0 });
        this.$store.state.films.loading = false;
        Toast.clear();
      }
    },
    onLoad() {
      this.$store.state.films.finished = true;
    }
  },
  

  filters: {
    // key - 过滤器名字
    // value - 函数 接收一个 value 值
    // key: value
    actorFormat(actors = []) {
      // let actors = actors || [];
      let tmp = actors.map(item => item.name);
      return tmp.length ? tmp.join(" ") : "暂无主演";
    },

    fil1(value) {
      return value.split("")[0];
    },

    fil2(value, str1, str2) {
      return value;
    }
  },

  mounted() {
    this.$store.state.films.loading = "true";
    Toast.loading({ duration: 0, message: "加载中..." });
    axios
      .get(
        "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=6892131",
        {
          headers: {
            "X-Client-Info":
              '{"a":"3000","ch":"1002","v":"5.0.4","e":"156179102810484015169988"}',
            "X-Host": "mall.film-ticket.film.list"
          }
        }
      )
      .then(res => {
        if (status == 0) {
          this.list = res.data.data.films;
          this.nameList = this.list["0"].actors;
          console.log(this.list);
          for (var y = 0; y < this.list.length; y++) {
            this.str = "";
            for (var i = 0; i < this.list[y].actors.length; i++) {
              this.str += this.list[y].actors[i].name;
              this.str += " ";
            }
            this.str = { name: this.str };
            this.moviesList.push(this.str);
            this.str = "";
          }
        }
      });
    Toast.clear();
    this.$store.state.films.loading = false;
  }
};
</script>

<style lang='scss'>
@import "../assets/px2rem.scss";
body {
  height: 100%;
}
.comingSoonFilm-item {
  position: relative;
  display: flex;
  padding: 15px 15px 15px 0;
}

.lazy-img-wrap {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 4.125rem;
  height: 5.875rem;
  background: rgb(249, 249, 249);
  float: left;
}

.comingSoonFilm-info {
  font-size: 16px;
  padding: 0 0.625rem;
  text-align: left;
}

.comingSoonFilm-info-span span:first-child {
  color: #191a1b;
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
  top: 1.5rem;
  right: 1.25rem;
}

.comingSoonFilm-grade span:first-child {
  font-size: 13px;
}

.comingSoonFilm-grade span:last-child {
  color: #ffb232;
  font-size: 14px;
}

.label {
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
