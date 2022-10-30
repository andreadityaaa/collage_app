const route = require('express').Router()
const MataKuliahController = require('../controllers/matakuliah.js')

route.get('/', MataKuliahController.read)
route.get('/:id', MataKuliahController.readId)
route.post('/', MataKuliahController.add)
route.put('/:id', MataKuliahController.edit)
route.delete('/:id', MataKuliahController.delete)

module.exports = route