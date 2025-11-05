const Joi = require('joi')

const schemaSituacionModificacion = Joi.object({
    fechaFin: Joi.alternatives().try(Joi.date(), Joi.valid(null)).required()
})

module.exports = schemaSituacionModificacion