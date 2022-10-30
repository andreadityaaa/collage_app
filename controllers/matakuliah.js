const { MataKuliah, Mahasiswa, Krs } = require ('../models')

class MataKuliahController {
  static read (req, res, next) {
    MataKuliah.findAll({
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
    MataKuliah.findOne({
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
    const { kodeMataKuliah, namaMataKuliah, sks, status } = req.body
    
    MataKuliah.create({
      kodeMataKuliah,
      namaMataKuliah,
      sks,
      status
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }

  static edit (req, res, next) {
    const { kodeMataKuliah, namaMataKuliah, sks, status } = req.body
    
    MataKuliah.update({
      kodeMataKuliah,
      namaMataKuliah,
      sks,
      status
      }, { where: {
        id: req.params.id
      }, returning: true
    })
      .then(data => {
        res.status(200).json({
          data,
          message: `Success Edit MataKuliah`
        })
      })
      .catch(err => {
        next(err)
      })
  }
  
  static delete (req, res, next) {
    MataKuliah.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(data => {
        console.log('<<<<<<<<<')
        if (!data) {
          res.status(200).json({
            message: `MataKuliah Not Found`
          })
        } else {
          res.status(200).json({
            message: `MataKuliah Success to Delete`
          })
        }
      })
      .catch(err => {
        console.log(err)
        next(err)
      })
  }
}

module.exports = MataKuliahController