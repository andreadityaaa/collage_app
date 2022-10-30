const route = require('express').Router()
const MahasiswaController = require('../controllers/mahasiswa.js')

route.get('/', MahasiswaController.read)
route.get('/:id', MahasiswaController.readId)
route.post('/', MahasiswaController.add)
route.put('/:id', MahasiswaController.edit)
route.delete('/:id', MahasiswaController.delete)

module.exports = route