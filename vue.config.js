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
  ],
  pwa: {
    themeColor: "#fd0015",
    msTileColor: "#fd0015",
    appleMobileWebAppCache: "yes",
    manifestOptions: {
      background_color: "#fd0015"
    }
  }
}
