'use strict'
var app = require('./app')
var mongoose = require('mongoose');
var port = process.env.PORT || 3678

bd = 'mongodb+srv://root:root@clusterprueba-dpivw.mongodb.net/test?retryWrites=true'

mongoose.connect(bd, (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log('Conexión a mongodb correcta.')
        app.listen(port, () => {
            console.log("API REST funcionando en http://localhost:" + port);
        });
    }
});

