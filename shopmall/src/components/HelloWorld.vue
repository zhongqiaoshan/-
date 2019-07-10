<template>
  <div class="hello">
    <div ref="banner" class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="
        item in list" :key="item.bannerId">
          <div class="banner-img" >
            <img :src="item.imgUrl" alt class="target-img" />
            <!-- <van-image-preview v-model="show" :images="ImagePreview" @change="onChange">
              <template v-slot:index>第{{ index }}页</template>
            </van-image-preview> -->
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <router-link tag="div" to="/city" class="adress">
        <span>{{ curCityInfo && curCityInfo.name }}</span>
        <span class="font">
          <img src="../assets/pull-down2.png" alt />
        </span>
      </router-link>
      <!-- <div style="color: #191a1b;" class="movei">电影</div> -->
    </div>

    <!-- <van-list v-model="loading" :finished="finished" finished-text="没有更多了"  @load="onLoad">
      <van-tabs v-model="active" class="hotmoveis" @click="btn1" sticky>
        <van-tab title=" 正在热映"></van-tab>
        <van-tab title=" 即将热映"></van-tab>
      </van-tabs>
    </van-list>-->
    <div></div>
    <router-view></router-view>
  </div>
</template>

<script>
import Swiper from "swiper";
import axios from "axios";
import $ from "jquery";
import "../assets/swiper.min.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { Loading } from "vant";
import { mapState, mapGetters } from "vuex";
import { ImagePreview } from "vant";

export default {
  data() {
    return {
      list: [],
      show: false
    };
  },
  computed: {
    ...mapState("films", ["loading", "finished"]),
    ...mapGetters("city", ["curCityInfo"])
  },
  methods: {
    initSwiper() {
      let container = this.$refs.banner;
      this.mySwiper = new Swiper(container, {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          loop: true,
          effect: "flip",
          observer: true,
          observeParents: true,
          pagination: ".swiper-pagination",
          paginationClickable: true,
          centeredSlides: true,
          notNextTick: true,
          autoplayDisableOnInteraction: true
        }
      });
    },
    // btnsImg() {
    //   ImagePreview(this.ImagePreview);
    // },
    //  onChange(index) {
    //   this.index = index;
    // },
  },
  components: {
    swiper,
    swiperSlide
  },

  watch: {
    list(newVal, oldVal) {
      if (this.mySwiper) {
        // 已经被初始化
        this.mySwiper.destroy();
      }
      this.$nextTick(() => {
        this.initSwiper();
      });
    }
  },

  mounted() {
    $.ajax({
      url: "https://m.maizuo.com/gateway?type=2&cityId=440300&k=1140371",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15611114019290014261849"}',
        "X-Host": "mall.cfg.common-banner"
      },
      success: res => {
        if (status == 0) {
          this.list = res.data;
          console.log(this.ImagePreview);
        }
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../assets/swiper.min.css";
@import "../assets/reset.css";
@import "../assets/px2rem.scss";

// @import "../assets/px2rem.scss";
body {
  overflow-x: hidden;
  width: 100%;
}
.banner-img {
  display: block;
}
.hello {
  position: relative;
}
// .swiper-container {
//   // width: px2rem(545);
//   // height: px2rem(310);
// }
img {
  width: 100%;
}
.target-img {
  width: 100%;
}

.adress {
  position: fixed;
  position: absolute;
  top: 3%;
  left: 3%;
  z-index: 999;
  color: #ffffff;
  border-radius: 2.1875rem;
  // background:#ffff;
  padding-left: -30px;
  line-height: 30px;
  text-align: center;
  display: flex;
  flex: 1;
}

.font img {
  width: 0.75rem;
  height: 0.75rem;
}

.movei {
  width: 100%;
  line-height: px2rem(44);
  background: #ffff;
  text-align: center;
  position: sticky;
  top: 0;
  position: absolute;
  z-index: 999;
  left: 20%;
}
</style>
