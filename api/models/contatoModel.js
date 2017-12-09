
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ContatoSchema = new Schema({
  name: {
    type: String,
    required: 'Nome é obrigatorio'
  },
  email: {
    type: String,
    required: 'Email é obrigatorio'
  },
  mensagem: {
    type: String,
    required: 'Mensagem é obrigatorio'
  },
  created_date: {
      type: Date,
      default: Date.now
  }
});

module.exports = mongoose.model('Contatos', ContatoSchema);