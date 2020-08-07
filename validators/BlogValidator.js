const { celebrate, Joi, Segments } = require('celebrate')

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required(),
            text: Joi.string().required()
        })
    }),
    edit: celebrate({
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string(),
            text: Joi.string()
        })
    })
}