// import path from 'path';
//%Simport { Server } from 'http';
// import Express from 'express';
// import React from 'react';

var express = require('express');
var path = require('path');
var config = require('./webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var app = express();
var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler,{noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));


app.use('/dist', express.static('dist'))

app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
