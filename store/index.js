export const actions = {
   async nuxtServerInit({ commit, dispatch }, { req, app}) {
      console.log(req.headers.cookie)
     const token = await app.$cookies.get('token');
     console.log('token', token);
     if (token) {
       await dispatch('user/add', {token})
     }
   }
 }