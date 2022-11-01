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

 //    UsuariosServices.listar();                                                //testado e OK.
 //    UsuariosServices.detalhar(2);                                             //testado e OK
 //    UsuariosServices.cadastrar(objeto);                                       //testado e OK
 //    UsuariosServices.remover(5);                                              //testado e OK
 //    UsuariosServices.addEndereco(["Rua da Gloria, endereço ei de vencer!"],2) //testado e OK
 //    UsuariosServices.removerEndereco(1,2);                                    //testado e OK
 //    UsuariosServices.alteraEndereco(1,"Rua Vitoria,2",4);                     //testado e OK
 //    UsuariosServices.addFormaDePagamento("0000 0000 0000 0000",5);            //testado e OK
 //    UsuariosServices.removerFormaDePagamento(1,2);                            //testado e OK
 //    UsuariosServices.alterarFormaDePagamento("1711 1711 1711 1711",0,128);    //testado e OK


         