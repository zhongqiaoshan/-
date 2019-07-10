<template>
  <div class="main">
    <div class="cinemas-search" data-enter-time="1562499435">
      <div class="cinemas-search-input">
        <div class="input-wrap onFocus">
          <i class="search-icon" style="font-size: 20px;">
            <img src="../assets/serach.png" alt />
          </i>
          <form action=".">
            <input
              type="text"
              v-model="searchVal"
              placeholder="输入影城名称"
              class="search-input"
              @input="serachfilms($event)"
            />
          </form>
          <div class="clean-icon">
            <i class="iconfont icon-chongzhi-qingchu" style="font-size: 20px; display: none;"></i>
          </div>
        </div>
        <div class="cancel-btn" @click="back">取消</div>
      </div>
      <div class="cinema-init-area" v-if="searchVal==''">
        <!---->
        <div class="cinema-nearby init-list">
          <div class="cinema-index-title">离你最近</div>
          <ul class="cinema-index-detail" v-for="item in this.citylists" :key="item.id">
            <li class="cinema-item-detail">
              <div class="cinema-item-text">{{ item.name }}</div>
            </li>
          </ul>
        </div>
        <!---->
        <!---->
      </div>
      <div class="cinema-search-result" v-if="result =='' && searchVal !==''">
        <div class="empty-result" data-enter-time="1562499435">
          <img
            src="data:image/png;base64,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"
            alt
          />
          <p>没有找到匹配的影院</p>
          <p class="empty-list-tip">提示：仅支持搜索“影院”，建议您检查输入的影院名称是否有误？</p>
        </div>
      </div>

      <div class="cinema-search-result" v-if="result.length>0">
        <div
          class="cinema-search-result-list"
          data-enter-time="1562502020"
          data-leave-time="1562504816"
        >
          <ul>
            <li class="cinema-search-result-item" v-for="items in result" :key="items.id">
              <a href="#/cinema/630/film" class="cinema-item-wrap">
                <div class="cinema-info-lf cinema-info">
                  <span class="cinema-name">{{ items.name }}</span>
                  <span class="cinema-address">{{ items.address }}</span>
                </div>
                <div class="cinema-info-rt cinema-info">
                  <div class>
                    <span class="cinema-lowPrice price-fmt">
                      <i>￥</i>
                      <span class="interge" style="font-size: 15px;">{{ items.lowPrice/100 }}</span>
                      <span style="display: none;">.</span>
                      <span class="decimal" style="font-size: 10px;"></span>
                      <span style="display: none;">.</span>
                      <span class="decimal" style="font-size: 10px; display: none;">00</span>
                    </span>
                    <span class="upon">起</span>
                  </div>
                  <span class="cinema-gpsAddress">距离未知</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!---->
  </div>
</template>

<script>
import axios from "axios";
import { Toast, PullRefresh, List } from "vant";

export default {
  name: "",

  data() {
    return {
      searchVal: "",
      citylist: [],
      list: "",
      lists: [],
      cityIds: "",
      cityId: "",
      citylists: [],
      result: []
    };
  },

  methods: {
    serachfilms(e) {
      this.result = [];
      for (var k = 0; k < 100; k++) {
        // let py = this.list[k].name.charAt(0);
        // let pys = e.target.value.split();
        // for (var i = 0; i < pys.length; i++) {
        //   if (py == pys[i]) {
        //     this.result.push(this.list[k]);
        //   }
        // }
        if(this.list[k].name.indexOf(e.target.value)>-1 || this.list[k].address.indexOf(e.target.value)>-1){
          this.result.push(this.list[k]);
        }
      }
    },
    back() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.cityId = window.localStorage.getItem("curCityId");
    axios
      .get("https://m.maizuo.com/gateway?", {
        params: {
          cityId: this.cityId,
          ticketFlag: 1,
          k: 9865489
        },
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"15605021417275674601907"}',
          "X-Host": "mall.film-ticket.cinema.list"
        }
      })
      .then(res => {
        if (status == 0) {
          var s = new Set();
          this.list = res.data.data.cinemas;
          for (var i = 0; i < 5; i++) {
            this.citylists.push(this.list[i]);
          }
        }
      });
  }
};
</script>

<style>
.main {
  height: 100%;
}
.cinemas-search {
  min-height: 100vh;
  color: #191a1b;
}
.cinemas-search-input {
  z-index: 3005;
  height: 49px;
  width: 100vw;
  padding: 0px 15px;
  background-color: #fff;
  position: fixed;
  color: #191a1b;
  margin-top: 10px;
}
.input-wrap .onFocus {
  width: calc(100% - 43px);
  background-color: #f4f4f4;
  position: relative;
  display: inline-block;
  border-radius: 3px;
  width: 100%;
  height: 30px;
}
.search-icon {
  font-size: 20px;
  position: absolute;
  left: 7px;
  top: 0;
  line-height: 30px;
  font-size: 21px;
  color: #797d82;
  font-family: iconfont !important;
  font-style: normal;
  left: 25px;
  font-size: 20px;
  z-index: 99;
}
.cancel-btn {
  width: 43px;
  position: relative;
  /* display: inline-block; */
  float: right;
  font-size: 14px;
  line-height: 30px;
  right: 45px;
  top: 0px;
  display: block;
}
.search-icon img {
  display: block;
  width: 17px;
  height: 17px;
  position: absolute;
  left: 7px;
  top: 6px;
  line-height: 30px;
  font-size: 21px;
  color: #797d82;
}
.icon-sousuo-sousuofangdajing:before {
  content: "\E62F";
}
.search-input {
  position: absolute;
  top: 0;
  height: 30px;
  width: calc(100% - 140px);
  border: 0;
  background: #f4f4f4;
  left: 20px;
  padding-left: 33px;
}
.clean-icon {
  position: absolute;
  right: 7px;
  top: 0;
  line-height: 30px;
  font-size: 21px;
  color: #797d82;
}
.iconfont .icon-chongzhi-qingchu {
  font-size: 20px;
  display: none;
}
.cancel-btn {
  width: 43px;
  position: absolute;
  display: inline-block;
  text-align: right;
  font-size: 14px;
  line-height: 30px;
}
.cinema-init-area {
  z-index: 3000;
  padding-top: 49px;
  min-height: 100vh;
  background-color: #fff;
}
.cinema-nearby init-list {
  padding: 0 15px 8px 0;
  margin-left: 15px;
  position: relative;
}
.cinema-index-title {
  font-size: 13px;
  line-height: 13px;
  color: #bdc0c5;
  margin: 18px 0;
}
.cinema-index-detail {
  display: flex;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: wrap;
}
.cinemas-search ul:after,
.cinemas-search ul:before {
  content: "";
  display: table;
}
.cinema-item-detail {
  text-align: center;
  padding-bottom: 10px;
  padding-right: 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  float: left;
}
.cinema-item-text {
  height: 30px;
  background-color: hsla(0, 0%, 96%, 0.6);
  line-height: 14px;
  border-radius: 3px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 13px;
  padding: 8px 12px;
}
.cinemas-search ul:after {
  clear: both;
}
.cinemas-search ul:after,
.cinemas-search ul:before {
  content: "";
  display: table;
}
.cinemas-search .cinema-init-area .init-list:first-child:after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #ededed;
  color: #ededed;
  -webkit-transform-origin: 0 100%;
  -ms-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  -ms-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.cinema-search-result {
  z-index: 3004;
  position: absolute;
  top: 49px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  height: calc(100vh - 49px);
  width: 100vw;
  overflow-y: auto;
}
.empty-result {
  position: absolute;
  top: 107px;
  width: 100%;
  text-align: center;
}
.empty-list-tip {
  font-size: 11px;
  padding: 0 22vw;
}
.cinema-search-result {
  z-index: 3004;
  position: absolute;
  top: 49px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  height: calc(100vh - 49px);
  width: 100vw;
  overflow-y: auto;
}
.cinemas-search ul:after,
.cinemas-search ul:before {
  content: "";
  display: table;
}
.cinemas-search .cinema-search-result .cinema-search-result-list li {
  height: 45px;
  position: relative;
  background-color: #fff;
  padding: 15px;
  padding-left: 0;
}
.cinemas-search
  .cinema-search-result
  .cinema-search-result-list
  li
  .cinema-item-wrap {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.cinemas-search
  .cinema-search-result
  .cinema-search-result-list
  li
  .cinema-item-wrap
  .cinema-info-lf {
  width: calc(100% - 65px);
  text-align: left;
}
.cinemas-search
  .cinema-search-result
  .cinema-search-result-list
  li
  .cinema-item-wrap
  .cinema-info-lf
  .cinema-name {
  color: #191a1b;
  font-size: 15px;
}
.cinemas-search
  .cinema-search-result
  .cinema-search-result-list
  li
  .cinema-item-wrap
  .cinema-info-lf
  span {
  display: block;
  width: 100%;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cinemas-search
  .cinema-search-result
  .cinema-search-result-list
  li
  .cinema-item-wrap
  .cinema-info-lf {
  width: calc(100% - 65px);
  text-align: left;
}
.cinemas-search
  .cinema-search-result
  .cinema-search-result-list
  li
  .cinema-item-wrap
  .cinema-info-lf
  .cinema-address {
  color: #797d82;
  font-size: 12px;
  margin-top: 5px;
}
.cinemas-search
  .cinema-search-result
  .cinema-search-result-list
  li
  .cinema-item-wrap
  .cinema-info-lf
  span {
  display: block;
  width: 100%;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cinemas-search .cinema-search-result .cinema-search-result-list li:after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #ededed;
  color: #ededed;
  -webkit-transform-origin: 0 100%;
  -ms-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  -ms-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.price-fmt {
  font-size: 15px;
  color: #ff5f16;
  height: 0 !important;
  display: inline-table !important;
}
.upon {
  color: #ff5f16;
  font-size: 10px;
}
.cinemas-search
  .cinema-search-result
  .cinema-search-result-list
  li
  .cinema-item-wrap
  .cinema-info-rt
  .cinema-gpsAddress {
  display: block;
  font-size: 11px;
  color: #797d82;
  margin-top: 5px;
}
</style>
