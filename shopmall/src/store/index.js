import Vue from 'vue';
import Vuex from 'vuex';

import films from './films/films.js';
import city from './city/city.js';
import user from './user/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        films,
        city,
        user
    }
})
