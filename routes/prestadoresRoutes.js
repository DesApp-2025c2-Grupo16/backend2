const express = require('express')
const { 
    validatePassword,
    registrarUsuario
} = require('../controllers/prestadoresController')

const router = express.Router()

router.post('/registrar', registrarUsuario)
router.post('/validar', validatePassword)

module.exports = router