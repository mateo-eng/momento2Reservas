const mongoose = require('mongoose');


let ReservasE = new mongoose.Schema({

    nombreCliente: {
        type: String,
        required: false
    },

    apellidoCliente: {
        type: String,
        required: false
    },

    telefono: {
        type: Number,
        required: false
    },

   FechaInicio: {
        type: String,
        required: false
    },

    fechaFinal: {
        type: String,
        required: false
    },

    numeroPersonas: {
        type: Number,
        required: false
    },

    tipoPaquete: {
        type: String,
        required: [true,'El paquede para la reserva debe ser necesario']
    }

});

module.exports = mongoose.model('modeloReservas', ReservasE);