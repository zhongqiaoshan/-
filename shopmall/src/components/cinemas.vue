<template>
  <div class="cinema-list">
    <div class="header">
      <div class="left">
        <router-link tag="div" to="/city" class="city">
          <span>{{ curCityInfo && curCityInfo.name }}</span>
          <span>
            <img src="../assets/pull-down.png" alt />
          </span>
        </router-link>
      </div>

      <div class="title">
        <div>影院</div>
      </div>

      <div class="right">
        <div class="right-div">
          <div class="toCinemaSearch">
            <img src="../assets/serach.png" @click="serach" alt />
          </div>
        </div>
      </div>

      <!-- 头部 -->

      <div class="cinema-list-tag allcity">
        <div class="cinema-list-tag-name">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
            <van-dropdown-item v-model="value3" :options="option3" />
          </van-dropdown-menu>
        </div>
      </div>

      <!-- heade——footer -->
      <div class="cinema-layer"></div>

      <!--  -->

      <div class="cinema-list-wrap cinema-items">
        <ul class="cinema-list">
          <li
            class="cinema-list-item"
            v-for="item in lists"
            :key="item.id"
            
          >
            <div class="cinema-item-wrap ">
              <div class="cinema-info-lf cinema-info">
                <span class="cinema-name">{{ item.name }}</span>
                <span class="ticketType" v-if=" value2 == 'a' && flag ">2D通兑票|3D通兑票</span>
                <span class="cinema-address">{{ item.address }}</span>
              </div>
              <div class="cinema-info-rt">
                <div class="cinema-list">
                  <span class="cinema-lowPrice">
                    <i v-if=" value2 == 'a' ">￥</i>
                    <span
                      class="interge"
                      style="font-size: 15px;"
                      v-if=" value2 == 'a'"
                    >{{ item.lowPrice/100 }}</span>
                    <span style="display: none;">.</span>
                    <span class="decimal" style="font-size: 10px;" v-if=" value2 == 'b' ">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAA1CAMAAAD1YwKXAAABblBMVEX////s7O7NztHFx8r+/v7AwsbHycy+wMS/wcXCxMje3+H5+frt7e/09PXT1df39/fV1tnz8/T8/Pz6+vv9/f3j5ObGyMv7+/vO0NPBw8ff4OLLzdDBwsbz9PT6+vro6er39/jY2dz29vf4+Pnx8vPs7e7n6OnGyMzJy87P0dTt7u/l5uji4+Xh4uTGx8vExsrNz9L09fXMztHR0tXHyMzT1NfIys3y8/TX2Nvd3uDCw8f4+fnq6+zu7/Dn6Orl5uf6+/vDxMj9/v77+/zX2Nrn5+ns7O3Iys7m5+nx8fLi4+TDxcj19vbk5efS09bKzM/AwcXv7/DQ0tTp6evb3N7c3d/3+PjZ2tzt7e7Dxcnb3N/U1tjQ0tXFx8vR09by8vPj5OXX2dv4+Pj5+fn19fbU1djY2dvS1NbJys7ExcnMzdH5+vrg4ePw8fLLzND+///7/PzP0NPr7O3a293W19rQ0dTk5ebW2Nr8/f3R09WCbK1KAAACgklEQVRIx52UV1vbQBREx7bks7LBNBeMDab3DoGEhJBACr0kpPfee//3eZCFZZDsfJmn3auR9s7s6Ep+tJV+fbnq5OPTqfEZheHT+qyhgsnDvkDaYJxjsHu6T7DORgHsa5mD7dZ098b1S1MAduYYbfkNENtp9ZU+7AK8yvlpJQPFifSxl/vbgSFfl8s2ZBcDek4YWGjzdjMOvO0KFDeQh4LXzR5k34WYNWDgibscg3ynV29MRGN2LJpo9ApjYDYkqXUKJsrFptSReammcu0FfJSkCZhcdUsNjs9lp8EtPi3CdUmzsF6mGTDNkaSVjDQbMGViAnalPrBdQU0OxFvKp7XEwXGP7gN7TT9hzn2UgnhbJTpxSLnLWbis77DjKgXT4nOkxYCrehN69AMOvDaaq6xrhoQkaRTmNAzbkqQoRKp4EYi69wV7ugiujBgkq3hJiEmSPsOWimBJkmxv4cEC21sUlYULdb7XBlkVoLdOf71Q0Jz3OFzvFfijb9BRx78OONRXuFbnPkYgotZ99nM177fLYP+WpmGlZl4y0O4G9qpq5M8agvOSVqfgXI08D0LWkqT38NoK/T/Sk+BOhZwD46HT6QzEygNgBZa6Q2j9ptKVojASTEsvwKmjXacJO/kSOM8q2w6wHwXQLgMlf6Ed4msnaItFuFU9Ju/Aw+O0riwUqrOrK3i5qeS5HS52B/hkBqoqPWBGT/Z8H5xe3z4DPA7QlpuH4cqAbjBwOtCrzrzP0+cOTFvB5pcqWi7EYagr7M5vgIl4UpcaQ7OhkbKWl94LIcjNw3BaGWBTtdCZh3ujoVIrOA/YELXq8NQD8CBZjyarAHa/6uPmFoP6F9y+q//HXzl1QJFrg6y6AAAAAElFTkSuQmCC"
                        alt
                      />
                    </span>
                    <span style="display: none;">.</span>
                    <span class="decimal" style="font-size: 10px; display: none;">00</span>
                  </span>
                  <span class="upon" v-if="value2 == 'a' ">起</span>
                </div>
                <span class="cinema-gpsAddress">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAA1CAMAAAD1YwKXAAABblBMVEX////s7O7NztHFx8r+/v7AwsbHycy+wMS/wcXCxMje3+H5+frt7e/09PXT1df39/fV1tnz8/T8/Pz6+vv9/f3j5ObGyMv7+/vO0NPBw8ff4OLLzdDBwsbz9PT6+vro6er39/jY2dz29vf4+Pnx8vPs7e7n6OnGyMzJy87P0dTt7u/l5uji4+Xh4uTGx8vExsrNz9L09fXMztHR0tXHyMzT1NfIys3y8/TX2Nvd3uDCw8f4+fnq6+zu7/Dn6Orl5uf6+/vDxMj9/v77+/zX2Nrn5+ns7O3Iys7m5+nx8fLi4+TDxcj19vbk5efS09bKzM/AwcXv7/DQ0tTp6evb3N7c3d/3+PjZ2tzt7e7Dxcnb3N/U1tjQ0tXFx8vR09by8vPj5OXX2dv4+Pj5+fn19fbU1djY2dvS1NbJys7ExcnMzdH5+vrg4ePw8fLLzND+///7/PzP0NPr7O3a293W19rQ0dTk5ebW2Nr8/f3R09WCbK1KAAACgklEQVRIx52UV1vbQBREx7bks7LBNBeMDab3DoGEhJBACr0kpPfee//3eZCFZZDsfJmn3auR9s7s6Ep+tJV+fbnq5OPTqfEZheHT+qyhgsnDvkDaYJxjsHu6T7DORgHsa5mD7dZ098b1S1MAduYYbfkNENtp9ZU+7AK8yvlpJQPFifSxl/vbgSFfl8s2ZBcDek4YWGjzdjMOvO0KFDeQh4LXzR5k34WYNWDgibscg3ynV29MRGN2LJpo9ApjYDYkqXUKJsrFptSReammcu0FfJSkCZhcdUsNjs9lp8EtPi3CdUmzsF6mGTDNkaSVjDQbMGViAnalPrBdQU0OxFvKp7XEwXGP7gN7TT9hzn2UgnhbJTpxSLnLWbis77DjKgXT4nOkxYCrehN69AMOvDaaq6xrhoQkaRTmNAzbkqQoRKp4EYi69wV7ugiujBgkq3hJiEmSPsOWimBJkmxv4cEC21sUlYULdb7XBlkVoLdOf71Q0Jz3OFzvFfijb9BRx78OONRXuFbnPkYgotZ99nM177fLYP+WpmGlZl4y0O4G9qpq5M8agvOSVqfgXI08D0LWkqT38NoK/T/Sk+BOhZwD46HT6QzEygNgBZa6Q2j9ptKVojASTEsvwKmjXacJO/kSOM8q2w6wHwXQLgMlf6Ed4msnaItFuFU9Ju/Aw+O0riwUqrOrK3i5qeS5HS52B/hkBqoqPWBGT/Z8H5xe3z4DPA7QlpuH4cqAbjBwOtCrzrzP0+cOTFvB5pcqWi7EYagr7M5vgIl4UpcaQ7OhkbKWl94LIcjNw3BaGWBTtdCZh3ujoVIrOA/YELXq8NQD8CBZjyarAHa/6uPmFoP6F9y+q//HXzl1QJFrg6y6AAAAAElFTkSuQmCC"
                    alt="距离"
                    style="display: none;"
                  />
                  <strong>距离未知</strong>
                </span>
              </div>
            </div>
          </li>
        </ul>
        <router-view></router-view>
      </div>

      <!--  -->
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { mapGetters } from "vuex";
import axios from "axios";
import { Popup } from "vant";
import { DropdownMenu, DropdownItem } from "vant";

export default {
  name: "",
  data() {
    return {
      list: [],
      price: [],
      money: "",
      asd: 0,
      cityId: "",
      show: "全城",
      value1: 0,
      value2: "a",
      value3: "A",
      listadress: [],
      listads: [],
      adresslist: " ",
      lists: [],
      flag: false,
      citylistas: "",
      option1: [{ text: "全城", value: 0 }],
      option2: [
        { text: "app订票", value: "a" },
        { text: "前台兑换", value: "b" }
      ],
      option3: [
        { text: "最近去过", value: "A" },
        { text: "离我最近", value: "B" }
      ]
    };
  },

  computed: {
    ...mapGetters("city", ["curCityInfo"])
  },
  methods: {
    // movieas(id) {
    //   this.$router.push(`/filmDetail/${id}`);
    // },
    serach(){
      this.$router.push(`/cinemasSeach/${this.cityId}`);
    }
  },
  watch: {
    value1() {
      this.flag = false;
      this.lists = [];
      if (this.value1 == 0) {
        this.lists = this.list;
      }
      for (var f in this.list) {
        if (this.option1[this.value1].text == this.list[f].districtName) {
          this.lists.push(this.list[f]);
        }
      }
    },
    value2() {
      this.flag = true;
      if (this.value2 == "a") {
        axios
          .get("https://m.maizuo.com/gateway?", {
            params: {
              cityId: this.cityId,
              ticketFlag: 1,
              k: 9657072
            },
            headers: {
              "X-Client-Info":
                '{"a":"3000","ch":"1002","v":"5.0.4","e":"15605021417275674601907"}',
              "X-Host": "mall.film-ticket.cinema.list"
            }
          })
          .then(res => {
            if (status == 0) {
              this.lists = res.data.data.cinemas;
            }
          });
      } else {
        axios
          .get("https://m.maizuo.com/gateway?", {
            params: {
              cityId: this.cityId,
              ticketFlag: 2,
              k: 9657072
            },
            headers: {
              "X-Client-Info":
                '{"a":"3000","ch":"1002","v":"5.0.4","e":"15605021417275674601907"}',
              "X-Host": "mall.film-ticket.cinema.list"
            }
          })
          .then(res => {
            if (status == 0) {
              this.lists = res.data.data.cinemas;
            }
          });
      }
    },
    value3() {
      if (this.value3 == "A") {
        this.lists = this.citylistas;
      } else {
        this.lists = this.citylistas;
      }
    }
  },
  mounted() {
   this.cityId = window.localStorage.getItem("curCityId")?  window.localStorage.getItem("curCityId") : 110100;
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
        var s = new Set();
        var j = 1;
        if (status == 0) {
          this.list = res.data.data.cinemas;
          this.lists = this.list;
          this.citylistas = this.list;
          this.adresslist = res.data.data;
          for (var i = 0; i < this.list.length; i++) {
            s.add(this.list[i].districtName);
          }
          for (var x of s) {
            this.option1.push({ text: x, value: j });
            j++;
          }
        }
      });
    if (this.value1 == 0) {
      this.lists = this.list;
    }
  }
};
</script>

<style>
@import "../assets/px2rem.scss";
.cinema-list {
  height: 100%;
}
.van-dropdown-menu__title:after {
    position: absolute;
    top: 18px;
    right: -12px;
    border: 3px solid;
    border-color: transparent transparent currentColor currentColor;
    transform: rotate(-45deg);
    opacity: .8;
    content: "";
}

.van-cell__title span {
  float: left;
}

.cinema-list > div {
  box-sizing: border-box;
  display: block;
}
.cinema-list .cinema-list-wrap li:after {
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
.header {
  z-index: 2000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2.75rem;
  line-height: 2.75rem;
  margin: 0;
  padding: 0;
  display: flex;
}

.left {
  min-width: 15%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 0.9375rem;
  float: left;
  height: 2.75rem;
}

.city span {
  display: inline-block;
  font-size: 13px;
  max-width: 58px;
  height: 16px;
  line-height: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #191a1b;
}

.city img {
  width: 0.75rem;
  height: 0.75rem;
}
.cinema-items{
  margin-top:50px;
}
.ticketType {
  line-height: 15px;
  width: 240px;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 15px;
  margin-top: 5px;
  font-size: 12px;
  letter-spacing: -0.1px;
  color: #797d82;
  margin-right: 5px;
}
.title {
  text-align: center;
  font-size: 17px;
  color: #191a1b;
  flex: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
  height: 2.75rem;
  width: 16.25rem;
}

.title span {
  text-align: center;
  font-size: 17px;
}

.right {
  float: right;
  justify-content: center;
  align-items: center;
  right: 3.93125rem;
}

.right-div {
  width: 100%;
  text-align: right;
}

.toCinemaSearch {
  width: 100%;
  text-align: center;
}

.toCinemaSearch img {
  vertical-align: middle;
  width: 1.125rem;
  height: 1.125rem;
  align-items: center;
  margin-right:15px;
}

.cinema-list-tag {
  position: fixed;
  height: 3.125rem;
  width: 100%;
  top: 2.75rem;
  right: 0;
  text-align: center;
  background-color: #fff;
  z-index: 2000;
}

.cinema-list-tag-name {
  position: relative;
}

.cinema-list-tag-name label {
  float: left;
  width: 33.3%;
  line-height: 3.0625rem;
  font-size: 14px;
  color: #191a1b;
  letter-spacing: -0.2px;
}

.cinema-list-tag-name label img {
  vertical-align: middle;
  padding-left: 2px;
  width: 0.8375rem;
  height: 0.5875rem;
}

.cinema-layer {
  padding-top: px2rem(94);
}

.cinema-list-wrap {
  padding-bottom: 3.0625rem;
  z-index: 100;
  overflow-y: auto;
  height: 700px;
  width: 100%;
  margin-top: 95px;
}

.cinema-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cinema-list-item {
  position: relative;
  background-color: #fff;
  padding-left: 0.9375rem;
  padding-right: 0.9375rem;
  margin-top: 0px;
}

.cinema-item-wrap {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.cinema-info-lf {
  width: 270px;
  text-align: left;
  /* padding-right: ; */
  float: left;
  flex: 1;
  /* margin-top: 40px; */
}

.cinema-name {
  color: #191a1b;
  font-size: 15px;
  display: block;
  /* max-width: 80%; */
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  height: 22px;
}
.cinema-list {
  height: 20px;
}
.cinema-address {
  font-size: 11px;
  color: #797d82;
  margin-top: 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
  display: block;
  max-width: 80%;
  overflow: hidden;
}

.cinema-info-rt .cinema-info {
  height: 20px;
  width: 70px;
  text-align: center;
  float: right;
  margin-right: -5px;
}

.cinema-lowPrice .price-fmt {
  font-size: 15px;
  color: #ff5f16;
  height: 0 !important;
  display: inline-table !important;
  text-align: center;
}
.cinema-lowPrice i {
  color: #ff5f16;
}
.price-fmt {
  float: none !important;
  font-size: 15px;
  color: #ff5f16;
  height: 0 !important;
  display: inline-table !important;
}
.interge {
  font-size: 15px;
  color: #ff5f16;
}
.upon {
  color: #ff5f16;
  font-size: 10px;
}
.cinema-gpsAddress {
  display: block;
  font-size: 11px;
  color: #797d82;
}
.cinema-gpsAddress strong {
  font-weight: 400;
  display: block;
  margin-top: 5;
}
.city {
  height: 100%;
  text-align: center;
}
.decimal {
  width: 13px;
  height: 17px;
}
.decimal img {
  width: 13px;
  height: 17px;
  display: block;
  position: relative;
  top: 10px;
  left: 10px;
}
</style>
