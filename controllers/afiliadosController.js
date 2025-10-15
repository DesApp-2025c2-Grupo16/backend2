import { afiliados } from "../data/data.js";

export const getAfiliadoById = (req, res) => {
  const { id } = req.params; 

  // Buscamos primero en titulares
  let af = afiliados.find(a => a.nroAfiliado === id);

  // Si no está en titulares, buscamos en grupo familiar
  if (!af) {
    for (let titular of afiliados) {
      af = (titular.grupoFamiliar || []).find(f => f.nroAfiliado === id);
      if (af) break;
    }
  }

  if (!af) return res.status(404).json({ error: "Afiliado no encontrado" });

  // Aseguramos que existan campos necesarios
  if (!af.situacionTerapeutica) af.situacionTerapeutica = { descripcion: "—" };
  if (!af.historiaClinica) af.historiaClinica = [];

  res.json(af);
};

export const createAfiliado = (req, res) => {
  const nuevo = { ...req.body };
  afiliados.push(nuevo);
  res.status(201).json(nuevo);
};

export const updateAfiliado = (req, res) => {
  const { id } = req.params;
  const index = afiliados.findIndex(a => a.nroAfiliado === id);
  if (index === -1) return res.status(404).json({ error: "Afiliado no encontrado" });
  afiliados[index] = { ...afiliados[index], ...req.body };
  res.json(afiliados[index]);
};

export const deleteAfiliado = (req, res) => {
  const { id } = req.params;
  const index = afiliados.findIndex(a => a.nroAfiliado === id);
  if (index === -1) return res.status(404).json({ error: "Afiliado no encontrado" });
  const eliminado = afiliados.splice(index, 1);
  res.json(eliminado[0]);
};

export const getGrupoFamiliar = (req, res) => {
  const { id } = req.params;
  const afiliado = afiliados.find(a => a.nroAfiliado === id);

  if (!afiliado) {
    return res.status(404).json({ error: "Afiliado no encontrado" });
  }

  // Armamos el grupo familiar con el titular incluido
  const titular = {
    nroAfiliado: afiliado.nroAfiliado,
    clasificacion: "Titular",
    nombre: afiliado.nombre,
    situacion: afiliado.situacionTerapeutica?.descripcion || "—",
    ultimoTurno: afiliado.turnos?.[afiliado.turnos.length - 1]?.fecha || "—",
  };

  const grupo = (afiliado.grupoFamiliar || []).map((familiar) => ({
    nroAfiliado: familiar.nroAfiliado,
    clasificacion: familiar.clasificacion,
    nombre: familiar.nombre,
    situacion: familiar.situacionTerapeutica?.descripcion || "—",
    ultimoTurno: familiar.turnos?.[familiar.turnos.length - 1]?.fecha || "—",
  }));

  res.json([titular, ...grupo]);
};
