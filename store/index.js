export const actions = {
  async nuxtServerInit({
    commit,
    dispatch
  }, {
    req,
    app
  }) {
    const token = await app.$cookiz.get('token');

    if (token) {
      await dispatch('user/add', {
        token
      })
    }
  }
}
