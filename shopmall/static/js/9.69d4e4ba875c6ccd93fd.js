webpackJsonp([9],{j4GG:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});i("eqfM");var a=i("/QYm"),e=i("Dd8w"),o=i.n(e),n=(i("7t+N"),i("mtWM")),l=i.n(n),r=i("NYxO"),c={name:"",data:function(){return{list:[],nameList:[],str:"",moviesList:[],nameLists:[],isLoading:!1,active:0,curFilmType:2,pageNum:1,pageSize:13,total:1,moviesLists:[],disabled:!1}},computed:o()({},Object(r.d)("films",["loading","finished"])),methods:{btn1:function(t,s){0==t?(this.$router.push("/moveislist/bottom"),this.active=0,this.$store.state.films.loading=!1,a.a.clear()):1==t&&(this.$router.push("/moveislistes/bottom"),this.active=1,this.$store.state.films.loading=!1,a.a.clear())},movies:function(t){this.$router.push("/filmDetail/"+t)},onRefresh:function(){var t=this,s=this;if(this.total==this.moviesLists.length)setTimeout(function(){s.$toast("没有了，宝贝"),s.isLoading=!1});else{a.a.loading({duration:0,message:"加载中..."});var i=window.localStorage.getItem("curCityId");(this.total-this.moviesLists.length)/this.pageSize>=1||(this.pageSize=this.total-this.moviesLists.length),l.a.get("https://m.maizuo.com/gateway?cityId="+i+"&pageNum="+(this.pageNum+1)+"&pageSize="+this.pageSize+"&type=1&k=1016945",{headers:{"X-Client-Info":'{"a":"3000","ch":"1002","v":"5.0.4","e":"15605021417275674601907"}',"X-Host":"mall.film-ticket.film.list"}}).then(function(s){if(0==status){a.a.clear(),t.total=s.data.data.total,t.list=s.data.data.films;for(var i=0;i<t.list.length;i++)t.moviesLists.push(t.list[i]);t.nameList=t.list[0].actors;for(var e=0;e<t.list.length;e++){if(t.str="",t.list[e].actors)for(var o=0;o<t.list[e].actors.length;o++)t.str+=t.list[e].actors[o].name,t.str+=" ";t.str={name:t.str},t.moviesList.push(t.str),t.str="",t.$toast("刷新成功"),t.isLoading=!1}}})}},times:function(t){var s=new Date(15622848e5),i=s.getMonth()+1,a=s.getDate(),e="";switch(s.getDay()){case 1:e="一";break;case 2:e="二";break;case 3:e="三";break;case 4:e="四";break;case 5:e="五";break;case 6:e="六";break;case 7:e="天"}return"周"+e+" "+i+"月"+a+"日"}},mounted:function(){var t=this;a.a.loading({duration:0,message:"加载中..."}),l.a.get("https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=2215074",{headers:{"X-Client-Info":'{"a":"3000","ch":"1002","v":"5.0.4","e":"15605021417275674601907"}',"X-Host":"mall.film-ticket.film.list"}}).then(function(s){if(0==status){t.list=s.data.data.films,t.moviesLists=t.list,t.nameList=t.list[0].actors;for(var i=0;i<t.list.length;i++){t.str="";for(var e=0;e<t.list[i].actors.length;e++)t.str+=t.list[i].actors[e].name,t.str+=" ";t.str={name:t.str},t.moviesList.push(t.str),t.str="",t.$store.state.films.loading=!1,a.a.clear()}}})}},m={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("van-tabs",{staticClass:"hotmoveis",attrs:{sticky:""},on:{click:t.btn1},model:{value:t.active,callback:function(s){t.active=s},expression:"active"}},[i("van-tab",{attrs:{title:" 正在热映"}}),t._v(" "),i("van-tab",{attrs:{title:" 即将热映"}})],1),t._v(" "),i("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(s){t.isLoading=s},expression:"isLoading"}},[i("div",{staticClass:"film-list-content"},[i("div",{staticClass:"comingSoon-wrap"},[i("ul",{staticClass:"comingSoon"},t._l(t.moviesLists,function(s,a){return i("li",{key:s.id,staticClass:"comingSoonFilm-item",on:{click:function(i){return t.movies(s.filmId)}}},[i("div",{staticClass:"lazy-img-wrap"},[i("img",{attrs:{src:s.poster,alt:""}})]),t._v(" "),i("div",{staticClass:"comingSoonFilm-info"},[i("div",{staticClass:"comingSoonFilm-info-span"},[i("span",[t._v(t._s(s.name))]),t._v(" "),i("span",[t._v(t._s(s.filmType.name))])]),t._v(" "),i("div",{staticClass:"comingSoonFilm-grade"},[s.grade?i("span",{staticClass:"gradees"},[t._v("观众评分")]):t._e(),t._v(" "),i("span",{staticClass:"yeallow"},[t._v(t._s(s.grade))])]),t._v(" "),i("div",{staticClass:"comingSoonFilm-actors over-hiden"},[i("span",{staticClass:"label"},[t._v("主演："+t._s(t.moviesList[a].name))])]),t._v(" "),i("div",{staticClass:"comingSoonFilm-detail"},[i("span",[t._v("上映日期："+t._s(t.times(s.premiereAt)))])]),t._v(" "),i("div",{staticClass:"comingSoonFilm-buy"},[i("span",[t._v("购票")])])])])}),0)])])]),t._v(" "),i("router-view")],1)},staticRenderFns:[]};var v=i("VU/8")(c,m,!1,function(t){i("yJZX")},null,null);s.default=v.exports},yJZX:function(t,s){}});
//# sourceMappingURL=9.69d4e4ba875c6ccd93fd.js.map