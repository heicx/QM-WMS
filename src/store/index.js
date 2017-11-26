import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
    errMsg: null,
    isLogin: false,
    adminUser: {},
    userList: []
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});