module.exports = {
    lintOnSave: false,
    publicPath:'./', 
    css: {
        loaderOptions: {
          postcss: {
            plugins: [
              require('postcss-px2rem')({
                remUnit: 37.5, //因为vant是以375px开发的，所以蓝湖上也需调成375比例
                remPrecision: 2,
              })
            ]
          }
        }
    },
}