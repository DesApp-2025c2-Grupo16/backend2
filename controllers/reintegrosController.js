const { Reintegro, Prestador, Sequelize } = require('../database/models')

const getReintegroById = async (req, res) => {
    try {
        const id = req.params.id
        const reintegro = await Reintegro.findByPk(id)
        if(!reintegro){
            return res.status(404).json({message: "No se encontro el reintegro"})
        }
        return res.status(200).json(reintegro)
    } catch (error) {
        return res.status(500).json({message: "Error interno del servidor", error: error.message})
    }
}

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
        return res.status(500).json({message: "Error interno del servidor", error: error.message})
    }
}

const getReintegrosByPrestadorAndEstado = async (req, res) => {
    try {
        const prestadorId = req.params.prestadorId
        const estados = req.params.estados.split(',')
        const prestador  = await Prestador.findByPk(prestadorId)
        if(!prestador){
            return res.status(404).json({message: "No se encontro el prestador"})
        }
        const reintegros = await Reintegro.findAll({
            where: {
                [Sequelize.Op.or]: [ { PrestadorId: prestadorId }, { PrestadorId: null} ],
                estado: { [Sequelize.Op.in]: estados }
            }
        })
        if(reintegros.length === 0){
            return res.status(404).json({message: "No se encontraron reintegros de este prestador con el estado indicado"})
        }
        return res.status(200).json(reintegros)
    } catch (error) {
        return res.status(500).json({message: "Error interno del servidor", error: error.message})
    }
}

const updateReintegro = async (req, res) => {
    try {
        const id = req.params.id
        const reintegro = await Reintegro.findByPk(id)
        if(!reintegro){
            return res.status(404).json({message: "No se encontro el reintegro"})
        }
        const {estado, motivoEstado, PrestadorId} = req.body
        reintegro.estado = estado
        reintegro.motivoEstado = motivoEstado
        reintegro.prestadorId = PrestadorId
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
    getReintegroById,
    getReintegrosByPrestador,
    getReintegrosByPrestadorAndEstado,
    updateReintegro,
    createReintegro
}