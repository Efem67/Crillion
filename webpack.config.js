const path = require('path');
module.exports = {
    entry: {
        index: './src/index.ts',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },
    output: {
        publicPath: '/public/',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    watch: true,

}