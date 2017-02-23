// var http = require('http');
// var ecstatic = require('ecstatic');
//
// http.createServer(
//   ecstatic({ root: __dirname + '/dist', gzip: true, headers: {a:'b'} })
// ).listen(8080);
//
// // http.createServer((req, res) => {
// //   req.pipe(res);
// // }).listen(8080);
//
// console.log('Listening on :8080');

var express = require('express');
var app = express();
var compression = require('compression');

app.use(compression({ threshold: 0 }));
app.use(express.static(__dirname + '/dist'));

app.all("/*", function(req, res, next) {
  res.sendFile('index.html', { root: __dirname + '/dist' });
});

var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port)

});