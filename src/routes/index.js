const express = require('express')
const personRoutes = require('./personRoute.js')
const categoryRoutes = require('./categoryRoute.js')
const courseRoutes = require('./courseRoute.js')

module.exports = app => {
  app.use(
    express.json(),
    personRoutes,
    categoryRoutes,
    courseRoutes
  )
}
