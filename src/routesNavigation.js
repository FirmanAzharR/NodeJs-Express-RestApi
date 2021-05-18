const router = require('express').Router()
const barang = require('./routes/barang')
const user = require('./routes/user')

router.use('/barang', barang)
router.use('/user', user)
module.exports = router
