import { Schema, model } from "mongoose";

let collection = "itineraries"
let schema = new Schema({
    photo: {type:String, require:true},
    name : {type:String, require:true},
    price : {type:Number, require:true},
    duration : {type:Number, require:true},
    likes : {type:Number, require: true},
    hashtags : {type:[String], require: true}
})

let Itinerarie = model(collection, schema)

export default Itinerarie