const Joi = require('joi')

const schemaRegistroSolicitud = Joi.object({
    tipo: Joi.string().valid('reintegro', 'receta', 'autorizacion').required(),
    fecha: Joi.date().required(),
    PrestadorId: Joi.number().required()
})

module.exports = schemaRegistroSolicitud