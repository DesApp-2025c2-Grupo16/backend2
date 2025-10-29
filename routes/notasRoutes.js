const {Router} = require('express');
const {
  getNotasByAfiliado,
  getNotasByAfiliadoAndPrestador,
  createNota
} = require("../controllers/notasController.js");

const router = Router();

router.get("/:afiliadoId", getNotasByAfiliado);
router.get("/:afiliadoId/:prestadorId", getNotasByAfiliadoAndPrestador);
router.post("/:turnoId", createNota);

module.exports = router;
