

//Mandas a llamar mongoose
const mongoose = require("mongoose")
//Mete en una constante la url del server
const url_db = "mongodb://localhost:27017"

// instancias mongoose con el server
mongoose.connect(url_db)

//Try / Catch
.then(()=>{

    console.log("Si jala")
})
.catch((error)=>{
    console.log("No jala")
})

//es como el modelo que como sera la tabla
const esquema = new mongoose.Schema({

    name:{
        type:String
    },
    APPat:{
        type:String
    },
    APMat:{
        type:String
    },
    Numerotel:{
        type:Number
    },
})
//genera la tabla
const modelo = new mongoose.model("Alumno", esquema)
const modeloProfesores = new mongoose.model("Maestros", esquema)

// anade una columnax
modelo.create({
    name: "ana",
    APPat : "Herrera",
    APMat: "Perez",
    Numerotel: 4491005050
})