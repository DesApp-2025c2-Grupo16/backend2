const express = require("express");
const {
  getTurnosById,
  createTurno,
  updateTurno,
  deleteTurnos
} = require("../controllers/turnosController.js");

const router = express.Router();

router.get("/:id", getTurnosById);
router.post("/:id", createTurno);
router.put("/:id", updateTurno);
router.delete("/:id", deleteTurnos);

module.exports = router;
