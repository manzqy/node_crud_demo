const mysql = require('mysql')
const moment = require('moment')
const cnt = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'yuedata',
  dateStrings: true
})

cnt.connect()

exports.getAllInfo = function(callback) {
  let sql = `SELECT * FROM xiaozhou`
  cnt.query(sql, (err, data, fields) => {
    if (err) return callback(err)
    callback(null, data)
  })
}
exports.addOneInfo = function(obj, callback) {
  obj.date = moment().format('YYYY-MM-DD hh:mm:ss')
  let sql = `INSERT INTO xiaozhou set ?`
  cnt.query(sql, [obj], (err, data) => {
    if (err) return callback(err)
    callback(null, data)
  })
}
exports.getOneHero = function(id, callback) {
  let sql = `SELECT * FROM xiaozhou WHERE id=?`
  cnt.query(sql, [id], (err, data) => {
    if (err) return callback(err)
    callback(null, data)
  })
}
exports.delOneHero = function(id, callback) {
  let sql = `DELETE FROM xiaozhou WHERE id=?`
  cnt.query(sql, [id], (err) => {
    if (err) return callback(err)
    callback(null)
  })
}
exports.uploadHero = function(obj, callback) {
  let { id } = obj
  delete obj.id
  obj.date = moment().format('YYYY-MM-DD hh:mm:ss')
  let sql = `UPDATE xiaozhou SET ? WHERE id=?`
  cnt.query(sql, [obj, id], (err) => {
    if (err) return callback(err)
    callback(null)
  })
}