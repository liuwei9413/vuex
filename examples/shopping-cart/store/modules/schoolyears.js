import shop from '../../api/shop'
import * as types from '../mutation-types'

// initial state
const state = {
  //all: []
  form: {
    schoolyears: [],
    nowYear: ''
  }

}

// getters
const getters = {
  //allProducts: state => state.all
  allSchoolYears: state => state.form.schoolyears,
  //allNowYear: state => state.nowYear
}

// actions
const actions = {
  //getAllProducts ({ commit }) {
  //  shop.getProducts(products => {
  //    commit(types.RECEIVE_PRODUCTS, { products })
  //  })
  //}
  getAllSchoolyears ({ commit }) {
    shop.getSchoolyears(schoolyears => {
      commit(types.RECEIVE_SCHOOLYEARS, { schoolyears })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_SCHOOLYEARS] (state, { schoolyears }) {
    console.log('xxxxxxxxxxxxx');
    state.form.schoolyears = schoolyears;
    state.form.nowYear = schoolyears[0].value;
  },

  //[types.ADD_TO_CART] (state, { id }) {
  //  state.all.find(p => p.id === id).inventory--
  //}
  [types.SHOW_TO_CART] (state, { value }) {
    state.form.nowYear = value;
    //console.log(state);
    //console.log(value);
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
