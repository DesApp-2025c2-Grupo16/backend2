import { afiliados } from "../data/data.js";

export const getHistorialById = (req, res) => {
  const af = afiliados.find(a => a.id === parseInt(req.params.id));
  if (!af) return res.status(404).json({ error: "Afiliado no encontrado" });
  res.json(af.historialMedico);
};

export const createHistorial = (req, res) => {
  const af = afiliados.find(a => a.id === parseInt(req.params.id));
  if (!af) return res.status(404).json({ error: "Afiliado no encontrado" });
  af.historialMedico.push(req.body);
  res.status(201).json(req.body);
};

export const updateHistorial = (req, res) => {
  const af = afiliados.find(a => a.id === parseInt(req.params.id));
  if (!af) return res.status(404).json({ error: "Afiliado no encontrado" });
  const index = req.body.index;
  if (index === undefined || index >= af.historialMedico.length)
    return res.status(400).json({ error: "Índice inválido" });
  af.historialMedico[index] = req.body.item;
  res.json(af.historialMedico[index]);
};

export const deleteHistorial = (req, res) => {
  const af = afiliados.find(a => a.id === parseInt(req.params.id));
  if (!af) return res.status(404).json({ error: "Afiliado no encontrado" });
  af.historialMedico = [];
  res.json({ message: "Historial eliminado correctamente" });
};
