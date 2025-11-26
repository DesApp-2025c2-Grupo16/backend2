const { Turno, Afiliado, Sequelize } = require('../database/models');

const getTurnosByPrestador = async (req, res) => {
  try {
    const prestadorId = req.params.prestadorId;
    const turnos = await Turno.findAll({
      where: { PrestadorId: prestadorId },
      include: [
        {
          model: Afiliado,
          attributes: ['nombre', 'apellido'],
        },
      ],
      order: [['fecha', 'ASC']],
    });

    // Normalizar la relación para que el frontend reciba `afiliado` (minúscula)
    const payload = turnos.map(t => {
      const item = t.toJSON();
      item.afiliado = item.Afiliado || null;
      delete item.Afiliado;
      return item;
    });

    return res.status(200).json(payload);
  } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor", error: error.message });
  }
};

const getTurnosByPrestadorAndEspecialidad = async (req, res) => {
  try {
    const prestadorId = req.params.prestadorId;
    const especialidad = req.params.especialidad;
    const turnos = await Turno.findAll({
      where: { PrestadorId: prestadorId, especialidad: especialidad },
      include: [
        {
          model: Afiliado,
          attributes: ['nombre', 'apellido'],
        },
      ],
      order: [['fecha', 'ASC']],
    });

    const payload = turnos.map(t => {
      const item = t.toJSON();
      item.afiliado = item.Afiliado || null;
      delete item.Afiliado;
      return item;
    });

    return res.status(200).json(payload);
  } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor", error: error.message });
  }
};

const getTurnosByPrestadorAndFecha = async (req, res) => {
  try {
    const prestadorId = req.params.prestadorId;
    const fecha = req.params.fecha;

    const pagina = parseInt(req.query.pagina)
    const tamaño = parseInt(req.query.tamaño)

    const minFecha = new Date(fecha);
    const maxFecha = new Date(fecha);
    maxFecha.setDate(maxFecha.getDate() + 1);

    const options = {
      where: {
        PrestadorId: prestadorId,
        fecha: {
          [Sequelize.Op.gte]: minFecha,
          [Sequelize.Op.lt]: maxFecha,
        },
      },
      include: [
        {
          model: Afiliado,
          attributes: ['nombre', 'apellido'],
        },
      ],
      order: [['fecha', 'ASC']]
    }

    if (!isNaN(pagina) && !isNaN(tamaño)) {
      options.limit = tamaño;
      options.offset = (pagina - 1) * tamaño;
    }

    const {rows, count} = await Turno.findAndCountAll(options);
    
    const turnos = rows.map(t => {
      const item = t.toJSON();
      item.afiliado = item.Afiliado || null;
      delete item.Afiliado;
      return item;
    });

    return res.status(200).json({turnos, count});
  } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor", error: error.message });
  }
};

const createTurno = async (req, res) => {
  try {
    const turno = await Turno.create({ ...req.body });
    if (turno === Sequelize.ValidationError) {
      return res.status(400).json(turno);
    }
    return res.status(201).json({ turno });
  } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor", error: error.message });
  }
};

const updateTurno = async (req, res) => {
  try {
    const id = req.params.id;
    await Turno.update(req.body, { where: { id: id } });
    const turno = await Turno.findByPk(id, {
      include: [
        {
          model: Afiliado,
          attributes: ['nombre', 'apellido'],
        },
      ],
    });

    const result = turno ? (() => { const it = turno.toJSON(); it.afiliado = it.Afiliado || null; delete it.Afiliado; return it; })() : null;
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor", error: error.message });
  }
};

module.exports = {
  getTurnosByPrestador,
  getTurnosByPrestadorAndEspecialidad,
  createTurno,
  updateTurno,
  getTurnosByPrestadorAndFecha
};
