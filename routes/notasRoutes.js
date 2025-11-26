const {Router} = require('express');
const {
  getNotasByAfiliado,
  getNotasByAfiliadoAndPrestador,
  createNota,
  updateNota
} = require("../controllers/notasController.js");
const validarNota = require('../middleware/validarNota.js');

const router = Router();

router.get("/:afiliadoId", getNotasByAfiliado);
router.get("/:afiliadoId/:prestador", getNotasByAfiliadoAndPrestador);
router.post("/:turnoId", validarNota, createNota);
router.patch("/:id", updateNota)

module.exports = router;
