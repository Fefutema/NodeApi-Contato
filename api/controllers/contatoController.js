'use strict';


var mongoose = require('mongoose'),
    Contato = mongoose.model('Contatos');

exports.listar_contatos = function(req, res) {
  Contato.find({}, function(err, contato) {
    if (err)
      res.send(err);
    res.json(contato);
  });
};




exports.criar_contato = function(req, res) {
  var novo_contato = new Contato(req.body);
  novo_contato.save(function(err, contato) {
    if (err)
      res.send(err);
    res.json(contato);
  });
};


exports.buscar_contato = function(req, res) {
  Contato.findById(req.params.contatoId, function(err, contato) {
    if (err)
      res.send(err);
    res.json(contato);
  });
};


exports.alterar_contato = function(req, res) {
  Contato.findOneAndUpdate({_id: req.params.contatoId}, req.body, {new: true}, function(err, contato) {
    if (err)
      res.send(err);
    res.json(contato);
  });
};


exports.deletar_contato = function(req, res) {


  Contato.remove({
    _id: req.params.contatoId
  }, function(err, contato) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
