const Joi = require('joi')

const schemaSituacion = Joi.object({
    descripcion: Joi.string().min(3).max(500).required(),
    fechaInicio: Joi.date().required(),
    fechaFin: Joi.date()
})

module.exports = schemaSituacion