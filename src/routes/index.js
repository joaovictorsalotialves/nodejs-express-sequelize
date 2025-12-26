const express = require('express')
const personRoutes = require('./personRoute.js')

module.exports = app => {
  app.use(
    express.json(),
    personRoutes
  )
}
