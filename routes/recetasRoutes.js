const express = require('express')
const { 
    getRecetaById,
    getRecetasByPrestador,
    getRecetasByPrestadorAndEstado,
    updateReceta,
    createReceta
} = require('../controllers/recetasController')
const validarSolicitudModificacion = require('../middleware/validarSolicitudModificacion')
const validarReceta = require('../middleware/validarReceta')

const router = express.Router()

router.get('/:id', getRecetaById)
router.get('/prestador/:prestadorId', getRecetasByPrestador)
router.get('/prestador/:prestadorId/:estado', getRecetasByPrestadorAndEstado)
router.patch('/:id', validarSolicitudModificacion, updateReceta)
router.post('/', validarReceta, createReceta)

module.exports = router