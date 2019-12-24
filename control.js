const ejs = require('ejs')

const heroData = require('./data_query')

exports.showIndexPage = function(req, res) {
  
  res.render('index', {})
}
exports.showEditPage = function(req, res) {
  res.render('edit', {})
}
exports.showAddPage = function(req, res) {
  res.render('add', {})
}
exports.showInfoPage = function(req, res) {
  res.render('info', {})
}
exports.getHeroInfo = function(req, res) {
  heroData.getAllInfo((err, data) => {
    if (err) return res.json({
      code: 201,
      msg: '服务器错误'
    });
    res.json({
      code: 200,
      msg: '获取数据成功',
      data: data
    })
  })
}
exports.addOneHeroInfo = function(req, res) {
  let obj = req.body
  heroData.addOneInfo(obj, (err, data) => {
    if (err) return res.json({
      code: 201,
      msg: '新增英雄失败'
    })
    res.json({
      code: 200,
      msg: '新增英雄成功'
    })
  })
}
exports.getOneHeroInfo = function(req, res) {
  let { id } = req.query
  heroData.getOneHero(id, (err, data) => {
    if (err) return res.json({
      code: 201,
      msg: '服务器错误'
    })
    res.json({
      code: 200,
      msg: '获取数据成功',
      data: data
    })
  })
}
exports.delOneHeroInfo = function(req, res) {
  let { id } = req.query
  heroData.delOneHero(id, (err) => {
    if (err) return res.json({
      code: 201,
      msg: '删除失败'
    })
    res.json({
      code: 200,
      msg: '删除成功'
    })
  })
}
exports.uploadHeroInfo = function(req, res) {
  let obj = req.body
  heroData.uploadHero(obj, (err) => {
    if (err) return res.json({
      code: 201,
      msg: '更新失败'
    })
    res.json({
      code: 200,
      msg: '更新成功'
    })
  })
}