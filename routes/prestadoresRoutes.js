const express = require('express')
const { 
    validatePassword,
    registrarUsuario,
    getMedicosDeCentro
} = require('../controllers/prestadoresController')

const router = express.Router()

router.post('/registrar', registrarUsuario)
router.post('/validar', validatePassword)
router.get('/medicos/:centroId', getMedicosDeCentro)

module.exports = router