import { afiliados } from "../data/data.js";

// GET /afiliados/:id/grupo-familiar
export const getGrupoFamiliar = (req, res) => {
  const { id } = req.params;

  // Buscar por nroAfiliado (ej: A1001)
  const afiliado = afiliados.find((a) => a.nroAfiliado === id);

  if (!afiliado) {
    return res.status(404).json({ error: "Afiliado no encontrado" });
  }

  // Preparamos el titular
  const titular = {
    nroAfiliado: afiliado.nroAfiliado,
    clasificacion: "Titular",
    nombre: afiliado.nombre,
    situacion: afiliado.situacionTerapeutica?.descripcion || "—",
    ultimoTurno:
      afiliado.turnos?.[afiliado.turnos.length - 1]?.fecha || "—",
  };

  // Preparamos el grupo familiar
  const grupo = (afiliado.grupoFamiliar || []).map((familiar) => ({
    nroAfiliado: familiar.nroAfiliado,
    clasificacion: familiar.clasificacion,
    nombre: familiar.nombre,
    situacion: familiar.situacionTerapeutica?.descripcion || "—",
    ultimoTurno:
      familiar.turnos?.[familiar.turnos.length - 1]?.fecha || "—",
  }));

  // Unimos titular + grupo
  const resultado = [titular, ...grupo];

  res.json(resultado);
};
