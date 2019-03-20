const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PUERTO = 8080;
const app = express();
 
app.use(bodyParser.urlencoded( {extended:false} ));
app.use(bodyParser.json());
 
 
// midle ware
app.use( (req, res, next) => {
    //permitimos que las peticiones se puedan hacer desde cualquier sitio
    res.header('Access-Control-Allow-Origin', '*')
    //res.header('Access-Control-Allow-Origin', '192.168.0.11')
    // configuramos las cabeceras que pueden llegar
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method' )
    // configuramos los métodos que nos pueden llegar
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
    next(); // para que se salga de esta función
})
 
 
/*mongoose.connect('mongoosedb://localhost:27017/coches', (err,res)=>{
    if(err){
        console.log('Fallo en BD' + err)
        throw err
    }else{
        console.log('Conexión con mongo correcta')
         
        app.listen(PUERTO, ()=>{
            console.log('El servidor se arranco correctamente')
        })
    }
})*/
 
app.get('/', (req,res)=>{
    res.status(200).send("hola angel que tal")
})

bd = 'mongodb+srv://root:root@clusterprueba-dpivw.mongodb.net/test?retryWrites=true'

mongoose.connect(bd, { useNewUrlParser: true, useFindAndModify:false }).then(
    () => {  
        console.log('Conexión con mongo correcta') 
        app.listen(PUERTO, ()=>{
            console.log('El servidor se arranco correctamente')
        })
    },err => { console.log('fallo en la base de datos:'+err) }
)
 
 
 
 
 
 
