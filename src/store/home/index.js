import { reqCategoryList, reqGetBannerList, reqFloorList } from "@/api"

const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
}
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
  BANNERLIST(state, data) {
    state.bannerList = data
  },
  GETFLOORLIST(state, data) {
    state.floorList = data
  }
}
const actions = {
  async categoryList({ commit }) {
    let result = await reqCategoryList()
    if (result.code === 200) {
      commit('CATEGORYLIST', result.data)
    }
  },
  async getBannerList({ commit }) {
    let result = await reqGetBannerList();
    if (result.code === 200) {
      commit('BANNERLIST', result.data)
    }
  },
  async getFloorList({ commit }) {
    let result = await reqFloorList()
    if (result.code === 200) {
      commit('GETFLOORLIST', result.data)
    }
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}