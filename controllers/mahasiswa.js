const { Mahasiswa, MataKuliah, Krs } = require ('../models')

class MahasiswaController {
  static read (req, res, next) {
    Mahasiswa.findAll({
        order: [['id', 'ASC']],
        include: MataKuliah
    })
    .then(data => {
        if (!data){
            throw createError(400, "not found!")
        }
        res.status(200).json(data)
    })
    .catch(err => {
        next(err)
    })
}

  static readId (req, res, next) {
    Mahasiswa.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }

  static add (req, res, next) {
    const { nim, nama, tempatLahir, tanggalLahir, alamat, noHandphone } = req.body
    
    Mahasiswa.create({
      nim,
      nama,
      tempatLahir,
      tanggalLahir,
      alamat,
      noHandphone
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }

  static edit (req, res, next) {
    const { nim, nama, tempatLahir, tanggalLahir, alamat, noHandphone } = req.body
    
    Mahasiswa.update({
      nim,
      nama,
      tempatLahir,
      tanggalLahir,
      alamat,
      noHandphone
      }, { where: {
        id: req.params.id
      }, returning: true
    })
      .then(data => {
        res.status(200).json({
          data,
          message: `Success Edit Mahasiswa`
        })
      })
      .catch(err => {
        next(err)
      })
  }
  
  static delete (req, res, next) {
    Mahasiswa.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(data => {
        console.log('<<<<<<<<<')
        if (!data) {
          res.status(200).json({
            message: `Mahasiswa Not Found`
          })
        } else {
          res.status(200).json({
            message: `Mahasiswa Success to Delete`
          })
        }
      })
      .catch(err => {
        console.log(err)
        next(err)
      })
  }
}

module.exports = MahasiswaController