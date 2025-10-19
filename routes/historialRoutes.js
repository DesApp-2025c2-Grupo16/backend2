const {Router} = require('express');
const {
  getHistorialById,
  createHistorial,
  updateHistorial,
  deleteHistorial
} = require("../controllers/historialController.js");

const router = Router();

router.get("/:id", getHistorialById);
router.post("/:id", createHistorial);
router.put("/:id", updateHistorial);
router.delete("/:id", deleteHistorial);

module.exports = router;
