import { reqGetSearchInfo } from '@/api'

const state = {
  searchList: {}
}
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList
  }
}
const actions = {
  async getSearchList({ commit }, params = {}) {
    const result = await reqGetSearchInfo(params)
    console.log(params)
    if (result.code === 200) {
      console.log('result')
      console.log(result.data)
      commit('GETSEARCHLIST', result.data)
    }
  }
}
const getters = {
  goodsList(state) {
    return state.searchList.goodsList || []
  },
  trademarkList(state) {
    return state.searchList.trademarkList || []
  },
  attrsList(state) {
    return state.searchList.attrsList || []
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}