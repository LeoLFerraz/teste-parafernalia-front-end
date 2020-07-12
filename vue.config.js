module.exports = {
    chainWebpack: config => {
        config
                .plugin('html')
                .tap(args => {
                    args[0].title = 'Parafernália Front-end Test'
                    return args
                })
    },
    css: {
        loaderOptions: {
            sass: {
                data: `
                        @import "@/assets/styles/globals.scss";
                    `
            }
        }
    }
}
