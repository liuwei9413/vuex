import * as types from './mutation-types'

export const addToCart = ({ commit }, product) => {
  console.log('我是action，异步结果返回后再commit mutations')
  if (product.inventory > 0) {
    commit(types.ADD_TO_CART, {
      id: product.id
    })
  }
}

//export const showToCart = ({ commit }, schoolyear) => {
//  //console.log('haha');
//  console.log(schoolyear);
//  commit(types.SHOW_TO_CART, {
//    value: schoolyear
//  })
//}