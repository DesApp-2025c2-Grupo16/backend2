const express = require('express')
const { 
    getRecetasByPrestador,
    getRecetasByPrestadorAndEstado,
    updateReceta,
    createReceta
} = require('../controllers/recetasController')
const validarSolicitudModificacion = require('../middleware/validarSolicitudModificacion')
const validarReceta = require('../middleware/validarReceta')

const router = express.Router()

router.get('/:prestadorId', getRecetasByPrestador)
router.get('/:prestadorId/:estado', getRecetasByPrestadorAndEstado)
router.patch('/:id', validarSolicitudModificacion, updateReceta)
router.post('/', validarReceta, createReceta)

module.exports = router