//这里管理api接口
import requests from './request'

//api/product/getBaseCategoryList
//get方式


export const reqCategoryList = () => {
  return requests({
    url: '/product/getBaseCategoryList',
    method: 'get'
  })
}