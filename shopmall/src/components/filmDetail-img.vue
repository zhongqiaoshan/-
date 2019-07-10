<template>
  <div>
    <div>
      <div  class="goBacks">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
          alt v-on:click="btn"
        />
      </div>
      <div class="titles">剧照({{ list.photos ? list.photos.length : 0 }})</div>
      <!---->
    </div>
    <div class="top">
      <ul class="ul-img">
        <li class="img-list" v-for="items in list.photos" :key="items.id">
          <img :src="items" alt v-on:click="btnImgs" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ImagePreview } from "vant";

export default {
  name: "",

  data() {
    return {
      list: [],
      photos: 0,
      ID: "",
      ImagePreview: [],
    };
  },

  methods: {
    btn(){
      this.$router.push(`/filmDetail/${ this.ID }`);
    },
    btnImgs(){
      ImagePreview(this.ImagePreview);
    }
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
          // console.log(this.list);
        }
      });
  }
};
</script>

<style scope>
body {
  overflow-x: hidden;
}
.goBacks img {
   width: 25px;
  height: 25px;
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 999;
  /* width: 100%; */
}
.top {
  position: relative;
  /* top:40px; */
}
.titles {
  height: 30px;
  position: relative;
  top: 5px;
  left: 5px;
  width: 100%;
  text-align: center;
}
.img-list {
  /* position: relative; */
  width: 115px;
  height: 115px;
  float: left;
  margin: 0.51px;
}
.img-list img {
  width: 100%;
  height: 100%;
}
</style>
