import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        appState: {
            stateOfApp: false
        }
    },
    getters: {},
    mutations: {
        changeState(state, anotherState) {
            state.appState.stateOfApp = anotherState
        }
    },
    actions: {}
});