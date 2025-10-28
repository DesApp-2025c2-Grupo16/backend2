const {Router} = require('express');
const {
  getNotasByAfiliado,
  createNota
} = require("../controllers/notasController.js");

const router = Router();

router.get("/:afiliadoId", getNotasByAfiliado);
router.post("/:turnoId", createNota);

module.exports = router;
