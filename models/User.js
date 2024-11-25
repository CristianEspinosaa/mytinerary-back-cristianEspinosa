import {Schema, model} from 'mongoose'

let collection = 'users'
let schema = new Schema ({
    name: {type: String, require: true},
    email: {type: String, require: true},
    address: {type: String, require: true},
    phoneNumber: {type: Number, require: true},
    password: {type: String, require: true},
    photo: {type: String, require: true},
    inLine: {type: Boolean, require: true},
},
{
    timestamps: true
})

let User = model(collection, schema)

export default User 