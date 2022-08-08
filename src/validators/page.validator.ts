import Joi from "joi";

const pageValidator = Joi.object({
    page: Joi.number().min(1).max(500).required()
})

export {
    pageValidator
}

