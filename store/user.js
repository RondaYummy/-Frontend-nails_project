// import {
//   getUser
// } from './getters'
export const currentUser = () => ({
  user: {}
})

export const mutations = {
  getUser(currentUser) {
    return currentUser.user.user;
  },

  add(currentUser, user) {
    currentUser.user = user;

  },
  // getUser(currentUser) {
  //   getUser(currentUser)
  // },

}
