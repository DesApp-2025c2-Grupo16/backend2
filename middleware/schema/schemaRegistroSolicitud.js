const Joi = require('joi')

const schemaRegistroSolicitud = Joi.object({
    tipo: Joi.string().valid('reintegro', 'receta', 'autorizacion').required(),
    estado: Joi.string().valid('Recibido','En análisis', 'Observado', 'Aprobado', 'Rechazado').required(),
    fecha: Joi.date().required(),
    PrestadorId: Joi.number().required()
})

module.exports = schemaRegistroSolicitud