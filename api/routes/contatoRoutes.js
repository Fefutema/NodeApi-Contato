'use strict';
module.exports = function(app) {
  var contatoList = require('../controllers/contatoController');

  // contatoList Routes
  app.route('/contatos')
    .get(contatoList.listar_contatos)
    .post(contatoList.criar_contato);


  app.route('/contatos/:contatoId')
    .get(contatoList.buscar_contato)
    .put(contatoList.alterar_contato)
    .delete(contatoList.deletar_contato);
};