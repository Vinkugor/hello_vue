import Vue from 'vue';
import Vuex from 'vuex';
import state from './global/state.js';
import actions from './global/actions.js';
import mutations from './global/mutations.js';
import getters from './global/getters.js';

import profile from './modules/profile.js';

Vue.use(Vuex);

//把上面的融到一起
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    // strict: true,
    modules: {
        profile,
    }
});