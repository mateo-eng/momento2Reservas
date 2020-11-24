const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

const mongoose = require('mongoose');

app.use(require('./controladorReservas'));

mongoose.connect('mongodb://localhost:27017/reserva', {useNewUrlParser: true,useUnifiedTopology: true});

mongoose.connection
.once('open',()=>console.log("Estas conectado a la base de datos"))
.on('error',(error)=>console.log(error));


app.listen(3000, () => {
    console.log("El servidor esta operativo en el puerto 3000");
});

