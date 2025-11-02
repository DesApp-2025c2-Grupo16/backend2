const express = require('express')
const { 
    getAutorizacionesByPrestador,
    getAutorizacionesByPrestadorAndEstado,
    updateAutorizacion
} = require('../controllers/autorizacionesController')
const validarSolicitudModificacion = require('../middleware/validarSolicitudModificacion')

const router = express.Router()

router.get('/:prestadorId', getAutorizacionesByPrestador)
router.get('/:prestadorId/:estado', getAutorizacionesByPrestadorAndEstado)
router.patch('/:id', validarSolicitudModificacion, updateAutorizacion)

module.exports = router