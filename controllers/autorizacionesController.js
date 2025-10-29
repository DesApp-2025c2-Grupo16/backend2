const { Autorizacion, Prestador } = require('../database/models')

const getAutorizacionesByPrestador = async (req, res) => {
    try {
        const prestadorId = req.params.prestadorId
        const prestador  = await Prestador.findByPk(prestadorId)
        if(!prestador){
            return res.status(404).json({message: "No se encontro el prestador"})
        }
        const autorizaciones = await Autorizacion.findAll({where: {PrestadorId: prestadorId}})
        if(autorizaciones.length === 0){
            return res.status(404).json({message: "No se encontraron autorizaciones de este prestador"})
        }
        return res.status(200).json(autorizaciones)
    } catch (error) {
        return res.status(500).json({message: "Error interno del servidor", error: error.message})
    }
}

const getAutorizacionesByPrestadorAndEstado = async (req, res) => {
    try {
        const prestadorId = req.params.prestadorId
        const estado = req.params.estado
        const prestador  = await Prestador.findByPk(prestadorId)
        if(!prestador){
            return res.status(404).json({message: "No se encontro el prestador"})
        }
        const autorizaciones = await Autorizacion.findAll({where: {PrestadorId: prestadorId, estado: estado}})
        if(autorizaciones.length === 0){
            return res.status(404).json({message: "No se encontraron autorizaciones de este prestador con el estado indicado"})
        }
        return res.status(200).json(autorizaciones)
    } catch (error) {
        return res.status(500).json({message: "Error interno del servidor", error: error.message})
    }
}

const updateAutorizacion = async (req, res) => {
    try {
        const id = req.params.id
        const autorizacion = await Autorizacion.findByPk(id)
        if(!autorizacion){
            return res.status(404).json({message: "No se encontro la autorizacion"})
        }
        const {estado, observacion} = req.body
        if(estado){
            autorizacion.estado = estado
        }
        if(observacion){
            autorizacion.observacion = observacion
        }
        await autorizacion.save()
        return res.status(200).json(autorizacion)
    } catch (error) {
        return res.status(500).json({message: "Error interno del servidor", error: error.message})
    }
}

module.exports = {
    getAutorizacionesByPrestador,
    getAutorizacionesByPrestadorAndEstado,
    updateAutorizacion
}