const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        //выводим ошибки в браузер
        client: {
            overlay: {
              errors: true,
              warnings: true,
            },
        },
        static: {
            directory: path.join(__dirname, './src'),
          },
          compress: true,
          port: 9026,
          //выводим ошибки в браузер
        
    }

});
