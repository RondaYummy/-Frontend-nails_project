export const actions = {
  async nuxtServerInit({
    commit,
    dispatch
  }, {
    req,
    app
  }) {
console.log(req.session);
    const token = await app.$cookies.get('token');

    if (token) {
      await dispatch('user/add', {
        token
      })
    }
  }
}
