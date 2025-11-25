const express = require('express')
const { 
    getAutorizacionById,
    getAutorizacionesByPrestador,
    getAutorizacionesByPrestadorAndEstado,
    updateAutorizacion,
    createAutorizacion
} = require('../controllers/autorizacionesController')
const validarSolicitudModificacion = require('../middleware/validarSolicitudModificacion')
const validarAutorizacion = require('../middleware/validarAutorizacion')

const router = express.Router()

router.get('/:id', getAutorizacionById)
router.get('/prestador/:prestadorId', getAutorizacionesByPrestador)
router.get('/prestador/:prestadorId/:estados', getAutorizacionesByPrestadorAndEstado)
router.patch('/:id', validarSolicitudModificacion, updateAutorizacion)
router.post('/', validarAutorizacion, createAutorizacion)

module.exports = router