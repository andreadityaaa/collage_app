const route = require('express').Router()
const KrsController = require('../controllers/krs.js')

route.get('/', KrsController.read)
route.get('/:id', KrsController.readId)
route.post('/', KrsController.add)
route.put('/:id', KrsController.edit)
route.delete('/:id', KrsController.delete)

module.exports = route