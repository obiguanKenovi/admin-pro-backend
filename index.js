//console.log("Hola mundo.");

const express=require('express');
/* esta linea de codigo sirve para leer el archivo donde estan las 
variables de entorno */
require('dotenv').config();

var cors=require('cors');

/*Las llaves significa que se esta desestructurando la peticion y solo se tomara 
le conection estring */
const {dbConnection}=require('./database/config');





//Crear el servidor de express
const app=express();

/*CONFIGURAR CORS Muy importante es un Middleware */
app.use(cors());

//Base de datos

dbConnection();

/*Como ver las variables de entorno */
 //---- console.log(process.env);

//Para levantarlo seria. recibe el puerto y una funcion de callback.

app.listen(process.env.PORT,()=>{
    console.log('Servidor corriendo en el puerto '+process.env.PORT);
} );


//Crear una ruta.

app.get('/',(request,response)=>{

    response.status(200).json({
        ok:true,
        mgs:'hola mundo'
    });
});
