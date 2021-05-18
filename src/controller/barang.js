// const bcrypt = require('bcrypt')
const helper = require('../helper/response')
const qs = require('querystring')
// const jwt = require('jsonwebtoken')
const fs = require('fs')

const {
  addBarangModel,
  cekBarangModel,
  getBarangModel,
  getTotalBarangModel,
  getBarangByIdModel,
  deleteBarangModel,
  updateBarangModel
} = require('../model/barang')
const { request } = require('http')

module.exports = {
  addBarang: async (request, response) => {
    try {
      const { nama, harga_beli, harga_jual, stok } = request.body
      const data = {
        nama,
        harga_beli,
        harga_jual,
        stok,
        foto: request.file === undefined ? '' : request.file.filename
      }
      const cekNama = await cekBarangModel(data.nama)
      if (cekNama.length > 0) {
        fs.unlink(`./uploads/${data.foto}`, function (err) {
          if (err) {
            console.log('error delete image')
          }
        })
        return helper.response(response, 400, 'barang sudah ada')
      } else {
        if (
          parseInt(data.harga_beli) === 'NaN' ||
          parseInt(data.harga_jual) === 'NaN'
        ) {
          return helper.response(response, 400, 'harga harus number')
        } else if (parseInt(data.stok) === 'NaN') {
          return helper.response(response, 400, 'stok harus number')
        } else {
          const add = await addBarangModel(data)
          return helper.response(response, 200, 'success add barang', add)
        }
      }
    } catch (error) {
      console.log(error)
      return helper.response(response, 400, 'bad request', error)
    }
  },
  selectBarang: async (request, response) => {
    try {
      const { id } = request.params
      const result = await getBarangByIdModel(id)
      if (result.length !== 0) {
        helper.response(response, 200, 'berhasil select barang', result)
      } else {
        helper.response(response, 400, 'barang kosong')
      }
    } catch (error) {
      console.log(error)
      helper.response(response, 400, 'bad request')
    }
  },
  deleteBarang: async (request, response) => {
    try {
      const { id } = request.params
      const cekId = await getBarangByIdModel(id)

      if (cekId.length > 0) {
        const data = cekId[0]
        if (data.foto !== '') {
          fs.unlink(`./uploads/${data.foto}`, function (err) {
            if (err) {
              console.log('error')
            }
          })
        }
        const result = await deleteBarangModel(data, id)
        helper.response(response, 200, 'barang terhapus', result)
      } else {
        helper.response(response, 400, `barang id ${id} tidak ditemukan`)
      }
    } catch (error) {
      console.log(error)
      return helper.response(response, 400, 'bad request', error)
    }
  },
  getBarang: async (request, response) => {
    try {
      let { page, limit, search } = request.query
      page = parseInt(page)
      limit = parseInt(limit)
      if (search !== '') {
        page = 1
      }
      let totalData
      const offset = page * limit - limit

      const result = await getBarangModel(limit, offset, search)
      if (search === '') {
        totalData = await getTotalBarangModel()
      } else {
        totalData = result.length
      }
      const totalPage = Math.ceil(totalData / limit)

      const prevLink =
        page > 1
          ? qs.stringify({ ...request.query, ...{ page: page - 1 } })
          : null
      const nextLink =
        page < totalPage
          ? qs.stringify({ ...request.query, ...{ page: page + 1 } })
          : null
      const pageInfo = {
        page,
        totalPage,
        limit,
        totalData,
        nextLink: nextLink && `http://localhost:5000/product?${nextLink}`,
        prevLink: prevLink && `http://localhost:5000/product?${prevLink}`
      }
      return helper.response(
        response,
        200,
        'Success Get Barang',
        result,
        pageInfo
      )
    } catch (error) {
      console.log(error)
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  updateBarang: async (request, response) => {
    try {
      const { id } = request.params
      const { nama, harga_beli, harga_jual, stok } = request.body
      let data = {
        nama,
        harga_beli,
        harga_jual,
        stok,
        foto: request.file === undefined ? '' : request.file.filename
      }
      const checkId = await getBarangByIdModel(id)
      if (checkId.length > 0) {
        if (data.foto) {
          if (checkId[0].foto !== data.product_img) {
            fs.unlink(`./uploads/${checkId[0].foto}`, function (err) {
              if (err) {
                console.log('error')
              }
            })
          }
        } else {
          delete data.foto
        }
        if (
          parseInt(data.harga_beli) === 'NaN' ||
          parseInt(data.harga_jual) === 'NaN'
        ) {
          return helper.response(response, 400, 'harga harus number')
        } else if (parseInt(data.stok) === 'NaN') {
          return helper.response(response, 400, 'stok harus number')
        } else {
          const result = await updateBarangModel(data, id)
          helper.response(response, 200, `Update barang berhasil ${id}`, result)
        }
      } else {
        helper.response(response, 400, `barang dengan id ${id} tidak ditemukan`)
      }
    } catch (error) {
      helper.response(response, 400, 'Bad Request', error)
    }
  }
}
