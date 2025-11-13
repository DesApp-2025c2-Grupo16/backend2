const { Turno , Sequelize} = require('../database/models')

const getTurnosByPrestador = async (req, res) => {
  try {
    const prestadorId = req.params.prestadorId
    const turnos = await Turno.findAll({where: {PrestadorId: prestadorId}})
    if(!turnos){
      return res.status(404).json({message: "No se encontraron turnos del prestador"})
    }
    return res.status(200).json(turnos)
  } catch (error) {
    return res.status(500).json({message: "Error interno del servidor", error: error.message})
  }
};
const getTurnosByPrestadorAndEspecialidad = async (req, res) => {
  try {
    const prestadorId = req.params.prestadorId
    const especialidad = req.params.especialidad
    const turnos = await Turno.findAll({where: {PrestadorId: prestadorId, especialidad: especialidad}})
    if(!turnos){
      return res.status(404).json({message: "No se encontraron turnos del prestador"})
    }
    return res.status(200).json(turnos)
  } catch (error) {
    return res.status(500).json({message: "Error interno del servidor", error: error.message})
  }
};

const getTurnosByPrestadorAndFecha = async (req, res) => {
  try {
    const prestadorId = req.params.prestadorId;
    const fecha = req.params.fecha;

    const minFecha = new Date(fecha);
    const maxFecha = new Date(fecha);
    maxFecha.setDate(maxFecha.getDate() + 1);

    const turnos = await Turno.findAll({
      where: {
        PrestadorId: prestadorId,
        fecha: {
          [Sequelize.Op.gte]: minFecha,
          [Sequelize.Op.lt]: maxFecha,
        },
      },
    });

    // Antes devolvías 404. Ahora devolvemos 200 con array vacío.
    return res.status(200).json(turnos);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error interno del servidor", error: error.message });
  }
};

const createTurno = async (req, res) => {
  try {
    const turno = await Turno.create({...req.body})
    if(turno === Sequelize.ValidationError){
      return res.status(400).json(turno)
    }
    return res.status(201).json({turno})
  } catch (error) {
    return res.status(500).json({message: "Error interno del servidor", error: error.message})
  }
}

const updateTurno = async (req, res) => {
  try {
    const id = req.params.id
    await Turno.update(req.body, {where: {id: id}})
    const turno = await Turno.findByPk(id)
    return res.status(200).json(turno)
  } catch (error) {
    return res.status(500).json({message: "Error interno del servidor", error: error.message})
  }
}

module.exports = {
  getTurnosByPrestador,
  getTurnosByPrestadorAndEspecialidad,
  createTurno,
  updateTurno,
  getTurnosByPrestadorAndFecha
}