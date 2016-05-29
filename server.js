const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const PORT = 8080;
const IP = '0.0.0.0';
new WebpackDevServer(webpack(config)).listen(PORT, IP, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log('Listening at ' + IP + ':' + PORT);
});
