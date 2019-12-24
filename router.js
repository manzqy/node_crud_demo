const express = require('express')

const router = express.Router()
const control = require('./control')

router
  .get('/', (req, res) => {
    control.showIndexPage(req, res)
  })
  .get('/edit', (req, res) => {
    control.showEditPage(req, res)
  })
  .get('/add', (req, res) => {
    control.showAddPage(req, res)
  })
  .get('/info', (req, res) => {
    control.showInfoPage(req, res)
  })
  .get('/getHeroInfo', (req, res) => {
    control.getHeroInfo(req, res)
  })
  .post('/addOneHeroInfo', (req, res) => {
    control.addOneHeroInfo(req, res)
  })
  .get('/getOneHeroInfo', (req, res) => {
    control.getOneHeroInfo(req, res)
  })
  .get('/delOneHeroInfo', (req, res) => {
    control.delOneHeroInfo(req, res)
  })
  .post('/uploadHeroInfo', (req, res) => {
    control.uploadHeroInfo(req, res)
  })

  module.exports = router