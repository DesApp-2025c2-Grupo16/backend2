const express = require('express')
const {
    getRegistrosByPrestadorAndDate,
    createRegistro
} = require('../controllers/registroSolicitudController')
const validarRegistroSolicitud = require('../middleware/validarRegistroSolicitud')

const router = express.Router()

router.get('/:prestadorId', getRegistrosByPrestadorAndDate)
router.post('/', validarRegistroSolicitud, createRegistro)

module.exports = router