// import {
//   getUser
// } from './getters'
export const state = () => ({
  user: {}
})

export const mutations = {
  add(state, user) {
    state.user = user;

  },

}

export const getters = {
  getUser: (state) => {
    return state.user
  }
}
