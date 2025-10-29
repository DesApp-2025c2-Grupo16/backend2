const express = require('express')
const { 
    getRecetasByPrestador,
    getRecetasByPrestadorAndEstado,
    updateReceta
} = require('../controllers/recetasController')
const validarSolicitudModificacion = require('../middleware/validarSolicitudModificacion')

const router = express.Router()

router.get('/:prestadorId', getRecetasByPrestador)
router.get('/:prestadorId/:estado', getRecetasByPrestadorAndEstado)
router.patch('/:id', validarSolicitudModificacion, updateReceta)

module.exports = router