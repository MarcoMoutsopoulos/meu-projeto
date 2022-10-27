//const usuarios = require ('../pizzaria/databases/usuarios.json');
const fs = require ('fs');
const UsuariosServices= require ('../pizzaria/services/UsuariosServices.js')
//usuario.listar ()



//const usuarios= require ('../pizzaria/databases/usuarios.json'); 

/*let objeto={
    id:200,
    nome: "Marco Moutsopoulos",
    email:"marcomoutsopoulos@yahoo.com.br",
    senha: "hugochaves",
    endereco:["Rua catulo da Paixao Cearense, 45"],
    formasDePagamento:[
     "1234 1234 1234 1234",
     "1234 1234 1234 1236"]
    }
    
let objetojson=JSON.stringify(objeto, null, 4);
                          
UsuariosServices.cadastrar()*/

UsuariosServices.detalhar(2);


    
 
