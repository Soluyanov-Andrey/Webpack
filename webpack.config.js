const path = require('path')

module.exports = {
    // development ,production
    mode: 'development',
    // точка входа
    entry: './src/index.js',
    // точка выхода
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
}
