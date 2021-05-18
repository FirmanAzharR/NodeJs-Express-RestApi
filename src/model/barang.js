const connection = require('../config/mysql')

module.exports = {
  addBarangModel: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO barang SET ?', data, (error, result) => {
        if (!error) {
          const newResult = {
            id_barang: result.insertId,
            ...data
          }
          resolve(newResult)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  cekBarangModel: (data) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT*FROM barang WHERE nama = ?',
        data,
        (error, result) => {
          if (!error) {
            resolve(result)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  },
  getTotalBarangModel: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT COUNT(*) AS total_barang FROM barang',
        (error, result) => {
          !error ? resolve(result[0].total_barang) : reject(new Error(error))
        }
      )
    })
  },
  getBarangModel: (limit, offset, search) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT*FROM barang WHERE nama LIKE '%${search}%' LIMIT ${limit} OFFSET ${offset}`,
        (error, result) => {
          if (!error) {
            resolve(result)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  },
  deleteBarangModel: (data, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `DELETE FROM barang WHERE id_barang=${id}`,
        (error, result) => {
          if (!error) {
            const newRes = {
              id_barang: id,
              ...data
            }
            resolve(newRes)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  },
  getBarangByIdModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT*FROM barang WHERE id_barang = ${id}`,
        (error, result) => {
          if (!error) {
            resolve(result)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  },
  updateBarangModel: (data, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE barang SET ? WHERE id_barang = ?',
        [data, id],
        (error, result) => {
          if (!error) {
            const newRes = {
              id_barang: id,
              ...data
            }
            resolve(newRes)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  }
}
