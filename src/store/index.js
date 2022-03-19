import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: "",
    tripList:[],
    contactRecordList:[]
  },
  getters: {},
  mutations: {
    SET_USER_ID: (state, id) => {
      state.userId = id;
    },
    TRIP_LIST(state,tripList){
      state.tripList.push(tripList)
    },
    CONTACT_RECORD_LIST(state,contactRecordList){
      state.contactRecordList.push(contactRecordList)
    }
  },
  actions: {
    getTripList({commit},data){
      // console.log(data)
      commit('TRIP_LIST',data)
    },
    getContactRecord({commit},data){
      commit('CONTACT_RECORD_LIST',data)
    }
  },
  modules: {},
});
