const { Router } = require('express')
const router = Router()

const signin = (username, password) => (req, res, next) => {
  if (req.body.username === username && req.body.password === password) {
    res.end('<!DOCTYPE html>' +
      '<title>Success</title>' +
      '<b>Username dan Password <span style="color: green;">Benar</span></b><br/>' +
      '<a href="/">Home</a><br/>' +
      '<img src="/image/success.gif" style="width:300px;"/>')
  } else {
    res.end('<!DOCTYPE html>' +
      '<title>Failed</title>' +
      '<b>Username atau Password <span style="color: red;">Salah</span></b><br/>' +
      '<a href="/">Home</a><br/>' +
      '<img src="/image/failed.gif" style="width:300px;"/>')
  }
}

router.post('/signin/01', signin('steven', 'jerry'))
router.post('/signin/02', signin('david', 'copperfield'))
router.post('/signin/03', signin('ninja', 'hatori'))
router.post('/signin/04', signin('raymoo', 'hakurei'))
router.post('/signin/05', signin('kirito', 'terlalu op'))
router.post('/signin/06', signin('kurang', 'kerjaan'))
router.post('/signin/07', signin('satori', 'koishi'))
router.post('/signin/08', signin('nikita', 'mirzani'))
router.post('/signin/09', signin('siraman', 'rohani'))
router.post('/signin/10', signin('robert baratheon', ''))

module.exports = router
