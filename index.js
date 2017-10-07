'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3700;

mongoose.connect('mongodb://localhost:27017/furia', (err, res) => {
  if(err){
    console.log("petada");
    throw err;
  }else{
    console.log("Base de datos funcionando correctamente...");

    app.listen(port, function(){
      console.log('API RESTful de furia escuchando...');
      console.log('el puerto es' + port);
    });
  }
});
