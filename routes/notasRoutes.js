const {Router} = require('express');
const {
  getNotasByAfiliado,
  getNotasByAfiliadoAndPrestador,
  createNota
} = require("../controllers/notasController.js");
const validarNota = require('../middleware/validarNota.js')

const router = Router();

router.get("/:afiliadoId", getNotasByAfiliado);
router.get("/:afiliadoId/:prestadorId", getNotasByAfiliadoAndPrestador);
router.post("/", validarNota, createNota);

module.exports = router;
