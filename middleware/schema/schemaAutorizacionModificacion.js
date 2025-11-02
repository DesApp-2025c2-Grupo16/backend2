const Joi = require('joi')

const schemaAutorizacionModificacion = Joi.object({
    estado: Joi.string().min(8).max(11).required(),
    observacion: Joi.string().min(3).max(500).required()
})

module.exports = schemaAutorizacionModificacion