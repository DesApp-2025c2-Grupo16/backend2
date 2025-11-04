const express = require('express')
const { 
    getReintegrosByPrestador,
    getReintegrosByPrestadorAndEstado,
    updateReintegro,
    createReintegro
} = require('../controllers/reintegrosController')
const validarSolicitudModificacion = require('../middleware/validarSolicitudModificacion')
const validarReintegro = require('../middleware/validarReintegro')

const router = express.Router()

router.get('/:prestadorId', getReintegrosByPrestador)
router.get('/:prestadorId/:estado', getReintegrosByPrestadorAndEstado)
router.patch('/:id', validarSolicitudModificacion, updateReintegro)
router.post('/', validarReintegro, createReintegro)

module.exports = router