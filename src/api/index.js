//这里管理api接口
import requests from './request'
import mockRequest from './mokeAjax'

export const reqCategoryList = () => {
  return requests({
    url: '/product/getBaseCategoryList',
    method: 'get'
  })
}

export const reqGetBannerList = () => {
  return mockRequest({
    url: '/banner',
    method: 'get'
  })
}

export const reqFloorList = () => {
  return mockRequest({
    url: '/floor',
    menubar: 'get'
  })
}

export const reqGetSearchInfo = (params) => requests({
  url: '/list',
  method: 'post',
  data: params
})