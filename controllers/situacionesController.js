const { afiliados } = require("../data/data.js");

const getSituacionById = (req, res) => {
  const af = afiliados.find(a => a.id === parseInt(req.params.id));
  if (!af) return res.status(404).json({ error: "Afiliado no encontrado" });
  res.json({
    id: af.id,
    numeroAfiliado: af.numeroAfiliado,
    situacionTerapeutica: af.situacionTerapeutica,
    fechaInicioSituacion: af.fechaInicioSituacion,
    fechaFinSituacion: af.fechaFinSituacion,
  });
};

const createSituacion = (req, res) => {
  const af = afiliados.find(a => a.id === parseInt(req.params.id));
  if (!af) return res.status(404).json({ error: "Afiliado no encontrado" });
  af.situacionTerapeutica = req.body.situacionTerapeutica;
  af.fechaInicioSituacion = req.body.fechaInicioSituacion;
  af.fechaFinSituacion = req.body.fechaFinSituacion;
  res.status(201).json(af);
};

const updateSituacion = (req, res) => {
  const af = afiliados.find(a => a.id === parseInt(req.params.id));
  if (!af) return res.status(404).json({ error: "Afiliado no encontrado" });
  Object.assign(af, req.body);
  res.json(af);
};

const deleteSituacion = (req, res) => {
  const af = afiliados.find(a => a.id === parseInt(req.params.id));
  if (!af) return res.status(404).json({ error: "Afiliado no encontrado" });
  af.situacionTerapeutica = null;
  af.fechaInicioSituacion = null;
  af.fechaFinSituacion = null;
  res.json({ message: "Situación eliminada correctamente" });
};

module.exports = {
  getSituacionById,
  createSituacion,
  updateSituacion,
  deleteSituacion
}
