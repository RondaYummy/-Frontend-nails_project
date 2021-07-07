import {
  getUser
} from './getters'
export const currentUser = () => ({
  user: {}
})

export const mutations = {

  add(currentUser, user) {
    currentUser.user = user;

  },
  getUser(currentUser) {
    getUser(currentUser)
  },

}
