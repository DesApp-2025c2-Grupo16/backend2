const Joi = require('joi')

const schemaSituacionModificacion = Joi.object({
    fechaFin: Joi.date().required()
})

module.exports = schemaSituacionModificacion