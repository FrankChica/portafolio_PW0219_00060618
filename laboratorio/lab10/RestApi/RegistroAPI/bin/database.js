var mongoose = require("mongoose");

let database = "RegistroAPI";
let port = "27017";
let host = "localhost";
let uri = `mongodb://${host}:${port}/${database}`;

const connectDB = () =>{
mongoose.Promise = global.Promise;

mongoose.connect(uri, {useNewUrlParser: true})
.then(()=>{console.log("la conewxion a la basew de datos fue exitosa ")})
.catch(()=>{console.log("un error ocurrio al conectarme ")})
}

module.exports = {
    connectDB
}