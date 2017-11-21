// import the function from greet.js (the .js extension is optional)
// ./ (or ../) means to look for a local file
var greet = require('./greet');

$(document).ready(function() {
    $('h1').html(greet('John Doe'));
});

// var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
console.log(path.resolve(__dirname, "assets"))

module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            context: path.resolve(__dirname, "assets/img"),
                            name: '[path][name].[ext]',
                            publicPath: 'images'
                        }
                    }
                ]
            }
        ]
    }
}
