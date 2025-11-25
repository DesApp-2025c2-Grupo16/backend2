const express = require('express')
const { 
    getReintegroById,
    getReintegrosByPrestador,
    getReintegrosByPrestadorAndEstado,
    updateReintegro,
    createReintegro
} = require('../controllers/reintegrosController')
const validarSolicitudModificacion = require('../middleware/validarSolicitudModificacion')
const validarReintegro = require('../middleware/validarReintegro')

const router = express.Router()

router.get('/:id', getReintegroById)
router.get('/prestador/:prestadorId', getReintegrosByPrestador)
router.get('/prestador/:prestadorId/:estado', getReintegrosByPrestadorAndEstado)
router.patch('/:id', validarSolicitudModificacion, updateReintegro)
router.post('/', validarReintegro, createReintegro)

module.exports = router