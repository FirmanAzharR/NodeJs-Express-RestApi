const router = require('express').Router()
// const { authorization } = require('../middleware/auth')
const uploadImg = require('../middleware/multer')
const {
  addBarang,
  getBarang,
  deleteBarang,
  updateBarang,
  selectBarang
} = require('../controller/barang')

router.post('/add-barang', uploadImg, addBarang)
router.get('/get-barang', getBarang)
router.get('/get-barang/:id', selectBarang)
router.delete('/delete-barang/:id', deleteBarang)
router.patch('/update-barang/:id', uploadImg, updateBarang)

module.exports = router
