const { MataKuliah, Mahasiswa, Krs } = require ('../models')

class KrsController {
  static read (req, res, next) {
    Krs.findAll({
        include: [ Mahasiswa, MataKuliah ],
        order: [['id', 'ASC']]
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
    Krs.findOne({
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
    const { mahasiswaId, mataKuliahId } = req.body
    
    Krs.create({
      mahasiswaId,
      mataKuliahId
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }

  static edit (req, res, next) {
    const { mahasiswaId, mataKuliahId } = req.body
    
    Krs.update({
        mahasiswaId,
        mataKuliahId
      }, { where: {
        id: req.params.id
      }, returning: true
    })
      .then(data => {
        res.status(200).json({
          data,
          message: `Success Edit KRS`
        })
      })
      .catch(err => {
        next(err)
      })
  }
  
  static delete (req, res, next) {
    Krs.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(data => {
        console.log('<<<<<<<<<')
        if (!data) {
          res.status(200).json({
            message: `KRS Not Found`
          })
        } else {
          res.status(200).json({
            message: `KRS Success to Delete`
          })
        }
      })
      .catch(err => {
        console.log(err)
        next(err)
      })
  }
}

module.exports = KrsController