const { RegistroSolicitud, Prestador, Sequelize } = require('../database/models')

const getRegistrosByPrestadorAndDate = async (req, res) => {
    try {
        const prestadorId = req.params.prestadorId
        const prestador  = await Prestador.findByPk(prestadorId)
        if(!prestador){
            return res.status(404).json({message: "No se encontro el prestador"})
        }
        const month = parseInt(req.query.month)
        const year = parseInt(req.query.year)
        const minFecha = new Date(year, month-1)
        const maxFecha = new Date(year, month)
        new Date()
        const registros = await RegistroSolicitud.findAll({
            where: {
                PrestadorId: prestadorId,
                fecha: {
                    [Sequelize.Op.gte]: minFecha,
                    [Sequelize.Op.lt]: maxFecha,
                }
            },

        })
        if(registros.length === 0){
            return res.status(404).json({message: "No se encontraron registros de este prestador"})
        }
        return res.status(200).json(registros)
    } catch (error) {
        return res.status(500).json({message: "Error interno del servidor", error: error.message})
    }
}

const createRegistro = async (req, res) => {
    try {
        const registro = await RegistroSolicitud.create({...req.body})
        return res.status(201).json(registro)
    } catch (error) {
        return res.status(500).json({message: "Error interno del servidor", error: error.message})
    }
}

module.exports = {
    getRegistrosByPrestadorAndDate,
    createRegistro
}