const usuarios= require ('../databases/usuarios.json');
const fs= require('fs');
const bcrypt= require ('bcrypt');

function listar(){
console.table(usuarios.map(
    u => {
        return{ 
            id: u.id,
            nome: u.nome,
            email: u.email,


    }}
))}




function salvar(arrayDeUsuarios){
    
const fs = require('fs');
fs.writeFileSync('../databases/usuarios.json',JSON.stringify(arrayDeUsuarios, null, 4));


}

function cadastrar(objeto){
    
   

}


function detalhar(idUsuario){
    

    (usuarios.map(u=> {(u.id == idUsuarios)
    console.log (u.nome)
    console.log (u.email)
    console.table(u.enderecos)})}


            
            
    
        // Seu código aqui


function remover(idDoUsuarioParaRemover){
    // Seu código aqui
}

function alterar(novosDados, idUsuario){
    // Seu código aqui
}

function addEndereco(novoEndereco, idUsuario){
    // Seu código aqui
}

function removerEndereco(posicaoDoEndereco, idUsuario){
// Seu código aqui
}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario){
// Seu código aqui        
}

function addFormaDePagamento(novaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
}

const UsuariosServices = {
    cadastrar,
    listar,
    detalhar,
    remover,
    alterar,
    addEndereco,
    removerEndereco,
    alteraEndereco: alterarEndereco,
    addFormaDePagamento,
    removerFormaDePagamento,
    alterarFormaDePagamento
}

module.exports = UsuariosServices;