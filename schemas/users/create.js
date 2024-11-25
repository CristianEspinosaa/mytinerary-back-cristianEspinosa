import joi from "joi";

const schema = joi.object({
    name : joi.string().required(),
    email : joi.string().required(),
    address : joi.string().required(),
    phoneNumber : joi.number().required(),
    password : joi.string().required(),
    photo : joi.string().required(),
    inLine : joi.boolean().required()
})


export default schema