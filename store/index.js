export const actions = {
   async nuxtServerInit({ commit, dispatch }, { req }) {
     const token = await this.$cookies.get('token')
     console.log(token);
     if (token) {
       await dispatch('user/add', {token})
     }
   }
 }