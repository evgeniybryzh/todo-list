module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/scss/core.scss";`,
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ?
    '/todo-list/' : '/'
};