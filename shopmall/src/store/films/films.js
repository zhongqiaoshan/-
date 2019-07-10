
const state = {
  loading: "false",
  finished: "false",
  isLoading: "false",
};

const mutations= {
  setloadtrue(state,payload){
    state.loading = payload.loading;
  },
  setloadfalse(state,payload){
    state.loading = payload.loading;
  },
}

export default{
  namespaced: true,
  state,
  mutations
}
