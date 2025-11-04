const express = require('express')
const { 
    getAutorizacionesByPrestador,
    getAutorizacionesByPrestadorAndEstado,
    updateAutorizacion,
    createAutorizacion
} = require('../controllers/autorizacionesController')
const validarSolicitudModificacion = require('../middleware/validarSolicitudModificacion')
const validarAutorizacion = require('../middleware/validarAutorizacion')

const router = express.Router()

router.get('/:prestadorId', getAutorizacionesByPrestador)
router.get('/:prestadorId/:estado', getAutorizacionesByPrestadorAndEstado)
router.patch('/:id', validarSolicitudModificacion, updateAutorizacion)
router.post('/', validarAutorizacion, createAutorizacion)

module.exports = router