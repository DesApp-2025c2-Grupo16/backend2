const { afiliados } = require("../data/data.js");

const getTurnosById = (req, res) => {
  const af = afiliados.find(a => a.id === parseInt(req.params.id));
  if (!af) return res.status(404).json({ error: "Afiliado no encontrado" });
  res.json(af.turnos);
};

const createTurno = (req, res) => {
  const af = afiliados.find(a => a.id === parseInt(req.params.id));
  if (!af) return res.status(404).json({ error: "Afiliado no encontrado" });
  af.turnos.push(req.body);
  res.status(201).json(req.body);
};

const updateTurno = (req, res) => {
  const af = afiliados.find(a => a.id === parseInt(req.params.id));
  if (!af) return res.status(404).json({ error: "Afiliado no encontrado" });
  const index = req.body.index;
  if (index === undefined || index >= af.turnos.length)
    return res.status(400).json({ error: "Índice inválido" });
  af.turnos[index] = req.body.turno;
  res.json(af.turnos[index]);
};

const deleteTurnos = (req, res) => {
  const af = afiliados.find(a => a.id === parseInt(req.params.id));
  if (!af) return res.status(404).json({ error: "Afiliado no encontrado" });
  af.turnos = [];
  res.json({ message: "Turnos eliminados correctamente" });
};

module.exports = {
  getTurnosById,
  createTurno,
  updateTurno,
  deleteTurnos
}