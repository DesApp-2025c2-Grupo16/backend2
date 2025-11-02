const express = require('express')
const { 
    getReintegrosByPrestador,
    getReintegrosByPrestadorAndEstado,
    updateReintegro
} = require('../controllers/reintegrosController')
const validarSolicitudModificacion = require('../middleware/validarSolicitudModificacion')

const router = express.Router()

router.get('/:prestadorId', getReintegrosByPrestador)
router.get('/:prestadorId/:estado', getReintegrosByPrestadorAndEstado)
router.patch('/:id', validarSolicitudModificacion, updateReintegro)

module.exports = router