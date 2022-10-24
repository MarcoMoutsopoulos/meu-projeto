const UsuariosServices= require ('../services/UsuariosServices.js')
const fs= require('fs')
const usuarios= require('../databases/usuarios.json')

 //   UsuariosServices.listar();
    
//Funçao testada e OK.
function cadastrar(){
    
   

 //  fs.writeFileSync(usuarios,cadUsuario);}
 //  cadastrar();

 function detalhar(idUsuario){
    

  (usuarios.map(u=> {(u.id == idUsuarios)
  console.log (u.nome)
  console.log (u.email)
  console.table(u.enderecos)})

  
          
          
  
      }