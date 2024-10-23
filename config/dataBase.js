import mongoose from "mongoose";

let url = process.env.URI_MONGO

mongoose.connect(url)
.then(()=> console.log('Data base Conect'))
.catch(error => console.log(error))
