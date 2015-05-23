/*
var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')
 
// Serve up public folder 
var serve = serveStatic('public', {'index': ['index.html', 'index.htm']})
 
// Create server 
var server = http.createServer(function(req, res){
  var done = finalhandler(req, res)
  serve(req, res, done)
})
 
// Listen 
server.listen(3000)


*/
var express = require('express')
var serveStatic = require('serve-static')
 
var server = express()
 
server.use(serveStatic('public', {'index': ['index.html', 'index.htm']}))
server.use(serveStatic(__dirname + '/public/partials'))
server.listen(3000)
