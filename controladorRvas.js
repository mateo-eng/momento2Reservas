const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())


const ReservasE = require('./modeloReservas');

let under = require('underscore');

app.get('/reserva/:nombre', function(req,res){
    
    let  identificador = req.params.nombre;

    ReservasE.findById(identificador,(err,resultado)=>{

        if(err){

            respuesta.status(400).json({

                mensaje: err,
                estado: false
            });

        }else{

            res.json({

                reserva: resultado

            });
        }
    });    
}); 


app.post('/reserva:nombre', function(req,res){


    let hotel = req.body;

    let  reservaGuardada = new ReservasE({

        nombreCliente:   hotel.nombreCliente,
        apellidoCliente: hotel.apellidoCliente,
        telefono:        hotel.telefono,
        fechaInicio:     hotel.fechaInicio,
        fechaFinal:      hotel.fechaFinal,
        numeroPersonas:  hotel.numeroPersonas,
        tipoPaquete:     hotel.tipoPaquete       
       
    });

        reservaGuardada.save((err,resultado)=>{

        if(err){
            res.status(400).json({
                mensaje: err,
                estado: false
            })

        }else{

            res.json({
                mensaje: 'Reserva guardada con exito'
            })
        }
    });
});

app.put('/reserva:nombre', function(req,res){

     let hotel = req.body;

    let reservaActualizar = under.pick(hotel,["fecchaInicio", "fechaFinal", "numeroPersonas", "tipoPaquete"]);    
 

    let identificador = req.params.nombre;

    ReservasE.findByIdAndUpdate(identificador, reservaActualizar, (err,resultado)=>{
        if (err){

            res.status(400).json({
                mensaje: err,
                estado: false
            });

        }else{
            res.json({
                mensaje: 'Reserva editada con exito'
            });

        }
    });   
   
});

app.delete('/reserva/:nombre', function(req,res){

    let identificador = req.params.nombre;

    ReservasE.findByIdAndRemove(identificador,(err,resultado)=>{

        if (err){

            res.status(400).json({
                mensaje: err,
                estado: false
            });

        }else{
            res.json({
                resultado: 'Resreva eliminada con exito'
            });

        }
    });
   
});


module.exports = app;