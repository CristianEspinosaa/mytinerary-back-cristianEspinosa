import { Schema, model } from "mongoose";

let collection = "cities"
let schema = new Schema({
    name : {type:String, require:true},
    country : {type:String, require:true},
    language : {type:String, require:true},
    currency : {type:String, require: true},
    religion : {type:String, require:true},
    image : {type:String, require:true},
    description: {type:String, require:true},
    itinerarie: {type: Schema.Types.ObjectId, ref: 'itineraries', require:true}
})

let City = model(collection, schema)

export default City