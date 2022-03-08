import Vue from 'vue';
import Vuex from 'vuex';

import { todoModule } from './todo';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        todos: todoModule
    }
});