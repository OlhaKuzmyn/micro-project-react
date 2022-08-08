import Joi from "joi";

const searchValidator = Joi.object({
    query: Joi.string().regex(/^.+$/).required().messages({
        'string.empty': 'Search bar cannot be empty'
    })
})

export {
    searchValidator
}