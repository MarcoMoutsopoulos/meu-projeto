const UsuariosServices= require ('../services/UsuariosServices.js')
const fs= require('fs')
const usuarios= require('../databases/usuarios.json');

/*objeto={
  "id": 99,
  "nome": "Marco",
  "email": "marco@globo.com",
  "senha": "marcoalexandre",
  "enderecos": [
      "Av das Espatódeas, 55",
      "Novo endereço de Raul",
      "tttttttt"
  ],
  "formasDePagamento": [
      "2222 2222 2222 2222"
  ]
}*/

 //    UsuariosServices.listar();            //Funçao testada e OK.
 //    UsuariosServices.detalhar(2);         //testado e OK
 //    UsuariosServices.cadastrar(objeto);   //testado e OK



     
         UsuariosServices.remover(5);
         