"use strict"

const express       = require('express')
const bodyParser    = require('body-parser')
const config        = require('./config/config')

const app     = module.exports = express()
const server  = require('http').createServer(app)
const io      = require('socket.io')(server)

io.on('connection', function (socket) {
  socket.emit('getMyUsername', generateUsername())

  socket.on('send', function (data) {
    socket.emit('updateMsg', data)
    socket.broadcast.emit('updateMsg', data)
  })
})

/**
 * Set headers to allow cross-origin
 */
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', config.allowOrigin)
  res.header('Access-Control-Allow-Credentials', true)
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

server.listen(process.env.PORT || 4000)

/**
 * Helper function to generate
 * @return {string} generated username
 */
function generateUsername(length)
{
  length = length === undefined ? 7 : length

  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for( var i=0; i < length; i++ )
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
