const express = require("express");
const {
  getSituacionById,
  createSituacion,
  updateSituacion,
  deleteSituacion
} = require("../controllers/situacionesController.js");

const router = express.Router();

router.get("/:id", getSituacionById);
router.post("/:id", createSituacion);
router.put("/:id", updateSituacion);
router.delete("/:id", deleteSituacion);

module.exports = router;
