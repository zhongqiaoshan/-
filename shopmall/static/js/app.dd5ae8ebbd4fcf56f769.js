webpackJsonp([13],{"31fL":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Dd8w"),i=n.n(a),s=n("NYxO"),c=n("7t+N"),o=n.n(c),r={name:"citys",computed:i()({},Object(s.c)("city",["cityList","hotCity","indexlist","searchList"]),{searchVal:{get:function(){return this.$store.state.city.searchVal},set:function(t){this.$store.commit({type:"city/setSearchVal",value:t})}}}),methods:{goTop:function(t){var e=this.$refs["box_"+t][0],n=this.$refs["lv-indexlist__content"];console.log(e,n);var a=e.offsetTop;console.log(e.offsetTop),o()("body,html").animate({scrollTop:a})},handleChgCity:function(t){var e=t.cityId;this.$store.commit({type:"city/setCurCityId",cityId:e}),this.$router.go(-1),window.localStorage.setItem("curCityId",e)}},created:function(){}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-city",attrs:{id:"body"}},[a("div",{staticClass:"van-search",staticStyle:{background:"rgb(255, 255, 255)"}},[a("div",{staticClass:"van-search__content van-search__content--square"},[a("div",{staticClass:"van-cell van-cell--borderless van-field"},[t._m(0),t._v(" "),a("div",{staticClass:"van-cell__value van-cell__value--alone"},[a("div",{staticClass:"van-field__body"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchVal,expression:"searchVal"}],staticClass:"van-field__control",attrs:{type:"search",placeholder:"请输入搜索关键词"},domProps:{value:t.searchVal},on:{change:t.searchVal,input:function(e){e.target.composing||(t.searchVal=e.target.value)}}})])])])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.searchVal,expression:"!searchVal"}],staticClass:"lv-indexlist"},[a("ul",{ref:"lv-indexlist__content",staticClass:"lv-indexlist__content"},[a("div",{staticClass:"recommend-city"},[t._m(1),t._v(" "),a("div",{staticClass:"hot-city"},[a("div",{staticClass:"city-index-title"},[t._v("热门城市")]),t._v(" "),a("ul",{staticClass:"city-index-detail"},t._l(t.hotCity,function(e){return a("li",{staticClass:"city-item-detail",attrs:{Key:e.cityId},on:{click:function(n){return t.handleChgCity(e)}}},[a("div",{staticClass:"city-item-text"},[t._v(t._s(e.name))])])}),0)])]),t._v(" "),t._l(t.cityList,function(e){return a("li",{ref:"box_"+e.py,refInFor:!0,staticClass:"lv-indexsection",attrs:{Key:e.py}},[a("p",{staticClass:"lv-indexsection__index"},[t._v(t._s(e.py))]),t._v(" "),a("ul",t._l(e.list,function(e){return a("li",{attrs:{Key:e.cityId},on:{click:function(n){return t.handleChgCity(e)}}},[t._v(t._s(e.name))])}),0)])})],2),t._v(" "),a("div",{staticClass:"lv-indexlist__nav"},[a("ul",t._l(t.indexlist,function(e){return a("li",{key:e,on:{click:function(n){return t.goTop(e)}}},[t._v(t._s(e))])}),0)])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.searchVal,expression:"searchVal"}],staticClass:"lv-indexlist"},[a("ul",{directives:[{name:"show",rawName:"v-show",value:t.searchList.length>0,expression:"searchList.length > 0"}],staticClass:"search_box"},t._l(t.searchList,function(e){return a("li",{key:e.cityId,on:{click:function(n){return t.handleChgCity(e)}}},[t._v(t._s(e.name))])}),0),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.searchList.length,expression:"!searchList.length"}],staticClass:"empty-result"},[a("img",{attrs:{src:n("OmQY"),alt:""}}),t._v(" "),a("p",[t._v("没有找到匹配的城市")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"van-field__left-icon"},[e("i",{staticClass:"van-icon van-icon-search"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"gprs-city"},[e("div",{staticClass:"city-index-title"},[this._v("GPS定位你所在城市")]),this._v(" "),e("ul",{staticClass:"city-index-detail"},[e("li",{staticClass:"city-item-detail city-item-detail-gprs"},[e("div",{staticClass:"city-item-text"},[this._v("定位失败")])])])])}]};var u=n("VU/8")(r,l,!1,function(t){n("AMWH")},null,null);e.default=u.exports},"4ml/":function(t,e){},"6gXq":function(t,e){},"97dx":function(t,e){},AMWH:function(t,e){},Betm:function(t,e){},CGQl:function(t,e){},I7eg:function(t,e){},JsOw:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("WJbf");var a=n("OhwO"),i=(n("iQ6B"),n("H6W6")),s=(n("n90r"),n("dJne")),c=(n("eqfM"),n("/QYm")),o=(n("9++/"),n("QhyB")),r=(n("yffH"),n("sdMh")),l=(n("nOaS"),n("pIDD")),u=(n("yIEv"),n("OIh9")),d=(n("jAcA"),n("86U2")),w=(n("3Lne"),n("SSsa")),f=(n("RgoE"),n("0KWt")),m=n("7+uW"),h=n("Dd8w"),v=n.n(h),p=n("NYxO"),y={name:"App",methods:v()({},Object(p.b)("city",["getCities"])),created:function(){this.getCities()}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{include:["home"]}},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)],1)],1)},staticRenderFns:[]};var g=n("VU/8")(y,M,!1,function(t){n("Betm")},null,null).exports,C=n("/ocq");m.a.use(C.a);var W=new C.a({routes:[{path:"/",component:function(){return n.e(3).then(n.bind(null,"gORT"))},redirect:"/moveislist/bottom",children:[{path:"moveislistes",component:function(){return n.e(11).then(n.bind(null,"ZD+B"))},children:[{path:"bottom",component:function(){return n.e(0).then(n.bind(null,"1w/Q"))}}]},{path:"moveislist",component:function(){return n.e(9).then(n.bind(null,"j4GG"))},children:[{path:"bottom",component:function(){return n.e(0).then(n.bind(null,"1w/Q"))}}]}]},{path:"/cinemas",component:function(){return n.e(1).then(n.bind(null,"PE/P"))},children:[{path:"bottom",component:function(){return n.e(0).then(n.bind(null,"1w/Q"))}}]},{path:"/favorable",component:function(){return n.e(5).then(n.bind(null,"KlSX"))},children:[{path:"bottom",component:function(){return n.e(0).then(n.bind(null,"1w/Q"))}}]},{path:"/login",component:function(){return n.e(4).then(n.bind(null,"K31e"))},children:[{path:"bottom",component:function(){return n.e(0).then(n.bind(null,"1w/Q"))}}]},{path:"/filmDetail/:id",component:function(){return n.e(7).then(n.bind(null,"GPfU"))}},{path:"/city",component:function(){return new Promise(function(t){t()}).then(n.bind(null,"31fL"))}},{path:"/register",component:function(){return n.e(8).then(n.bind(null,"q3Wa"))}},{path:"/cinemasDetail/:id",component:function(){return n.e(6).then(n.bind(null,"xAum"))}},{path:"/filmDetailImg/:id",component:function(){return n.e(10).then(n.bind(null,"NZh4"))}},{path:"/cinemasSeach/:id",component:function(){return n.e(2).then(n.bind(null,"5f3+"))}}]}),A=n("DNVT"),I=n("7QTg"),_=n.n(I),b=(n("4ml/"),{namespaced:!0,state:{loading:"false",finished:"false",isLoading:"false"},mutations:{setloadtrue:function(t,e){t.loading=e.loading},setloadfalse:function(t,e){t.loading=e.loading}}}),x=n("mvHQ"),O=n.n(x),S=n("mtWM"),X=n.n(S),V={namespaced:!0,state:{cities:window.localStorage.getItem("cities")?JSON.parse(window.localStorage.getItem("cities")):[],searchVal:"",curCityId:window.localStorage.getItem("curCityId")?window.localStorage.getItem("curCityId")-0:440300},getters:{curCityInfo:function(t){return t.cities.find(function(e){return e.cityId===t.curCityId})},cityList:function(t){var e=[];return t.cities.forEach(function(t){var n=t.pinyin.charAt(0).toUpperCase(),a=e.findIndex(function(t){return t.py===n});if(a>-1)e[a].list.push(t);else{var i={py:n,list:[t]};e.push(i)}}),e=e.sort(function(t,e){return t.py.charCodeAt()-e.py.charCodeAt()})},hotCity:function(t){return t.cities.filter(function(t){return t.isHot})},indexlist:function(t,e){return e.cityList.map(function(t){return t.py})},searchList:function(t){var e=[];return t.searchVal&&(e=t.cities.filter(function(e){return e.name.indexOf(t.searchVal)>-1})),e}},mutations:{setSearchVal:function(t,e){t.searchVal=e.value},setCities:function(t,e){t.cities=e.list},setCurCityId:function(t,e){t.curCityId=e.cityId}},actions:{getCities:function(t){var e=t.commit;t.state.cities.length||(c.a.loading({duration:0,mask:!0,message:"加载中..."}),X.a.get("https://m.maizuo.com/gateway?k=2498439",{headers:{"X-Client-Info":'{"a":"3000","ch":"1002","v":"5.0.4","e":"156194886142949673108"}',"X-Host":"mall.film-ticket.city.list"}}).then(function(t){var n=t.data;0===n.status?(e({type:"setCities",list:n.data.cities}),window.localStorage.setItem("cities",O()(n.data.cities))):Object(c.a)(n.msg),c.a.clear()}))}}},N={namespaced:!0,state:{userInfo:window.localStorage.getItem("userInfo")?JSON.parse(window.localStorage.getItem("userInfo")):null},getters:{},mutations:{setUserInfo:function(t,e){t.userInfo=e.info},setUserAvatar:function(t,e){var n=v()({},t.userInfo,{avatar:e.avatar});t.userInfo=n,window.localStorage.setItem("userInfo",O()(n))}},actions:{handleLogin:function(t,e){c.a.loading({duration:0,message:"加载中..."}),X.a.post("http://localhost:9090/sign-in",e).then(function(e){c.a.clear();var n=e.data;0===n.code?(window.localStorage.setItem("userInfo",O()(n.data)),t.commit({type:"setUserInfo",info:n.data}),Object(c.a)("登录成功"),setTimeout(function(){var t=W.currentRoute.query.redirect||"/moveislistes/bottom";W.replace(t)},1e3)):Object(c.a)(n.msg)})},handleLogout:function(t){t.commit({type:"setUserInfo",info:null}),window.localStorage.removeItem("userInfo"),window.location.reload()},handleUpdAvatar:function(t,e){var n=t.commit,a=t.state;c.a.loading({duration:0,message:"加载中..."});var i=new FormData;i.append("userId",a.userInfo.userId),i.append("avatar",e.target.files[0]),X.a.post("http://localhost:9090/updat-avatar",i,{headers:{"content-type":"multipart/form-data"}}).then(function(t){c.a.clear();var e=t.data;0===e.code?(Object(c.a)("修改成功"),n({type:"setUserAvatar",avatar:e.data})):Object(c.a)(e.msg)})}}};m.a.use(p.a);var P=new p.a.Store({modules:{films:b,city:V,user:N}}),L=n("31fL");m.a.use(p.a),m.a.use(_.a),m.a.use(w.a).use(f.a),m.a.use(u.a).use(d.a),m.a.use(l.a),m.a.use(c.a).use(o.a).use(r.a),m.a.use(i.a).use(s.a),m.a.use(a.a),m.a.config.productionTip=!1,new m.a({el:"#app",router:W,Swiper:A.a,store:P,components:{App:g,citys:L.default},template:"<App/>"})},OmQY:function(t,e){t.exports="data:image/png;base64,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"},W0KU:function(t,e){},ZZgd:function(t,e){},ZtQm:function(t,e){},bFPQ:function(t,e){},eh36:function(t,e){},hW8u:function(t,e){},nOtf:function(t,e){},nsZj:function(t,e){},zEXB:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.dd5ae8ebbd4fcf56f769.js.map