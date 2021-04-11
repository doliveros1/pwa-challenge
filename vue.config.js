module.exports = {
  devServer: {
    proxy: {
      "favorites/*": {
        target: "https://microservice-challenge.herokuapp.com/"     
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
