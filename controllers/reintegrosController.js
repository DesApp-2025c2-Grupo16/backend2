const { Reintegro, Prestador, Sequelize } = require('../database/models')

const getReintegrosByPrestador = async (req, res) => {
    try {
        const prestadorId = req.params.prestadorId
        const prestador  = await Prestador.findByPk(prestadorId)
        if(!prestador){
            return res.status(404).json({message: "No se encontro el prestador"})
        }
        const reintegros = await Reintegro.findAll({where: {PrestadorId: prestadorId}})
        if(reintegros.length === 0){
            return res.status(404).json({message: "No se encontraron reintegros de este prestador"})
        }
        return res.status(200).json(reintegros)
    } catch (error) {
        return res.status(500).json({message: "Error interno del servidors", error: error.message, fn: error.name,cn: error.stack,ln: error.toString()})
    }
}

const getReintegrosByPrestadorAndEstado = async (req, res) => {
    try {
        const prestadorId = req.params.prestadorId
        const estado = req.params.estado
        const prestador  = await Prestador.findByPk(prestadorId)
        if(!prestador){
            return res.status(404).json({message: "No se encontro el prestador"})
        }
        const reintegros = await Reintegro.findAll({where: {PrestadorId: prestadorId, estado: estado}})
        if(reintegros.length === 0){
            return res.status(404).json({message: "No se encontraron reintegros de este prestador con el estado indicado"})
        }
        return res.status(200).json(reintegros)
    } catch (error) {
        return res.status(500).json({message: "Error interno del servidor", error: error.message, ec: error.cause})
    }
}

const updateReintegro = async (req, res) => {
    try {
        const id = req.params.id
        const reintegro = await Reintegro.findByPk(id)
        if(!reintegro){
            return res.status(404).json({message: "No se encontro el reintegro"})
        }
        const {estado, observacion} = req.body
        if(estado){
            reintegro.estado = estado
        }
        if(observacion){
            reintegro.observacion = observacion
        }
        await reintegro.save()
        return res.status(200).json(reintegro)
    } catch (error) {
        return res.status(500).json({message: "Error interno del servidor", error: error.message})
    }
}

const createReintegro = async (req,res) => {
    try {
        const reintegro = await Reintegro.create({...req.body})
        if(reintegro === Sequelize.ValidationError){
            return res.status(400).json(reintegro)
        }   
        return res.status(201).json(reintegro)
    } catch (error) {
        return res.status(500).json({message: "Error interno del servidor", error: error.message})
    }
}

module.exports = {
    getReintegrosByPrestador,
    getReintegrosByPrestadorAndEstado,
    updateReintegro,
    createReintegro
}