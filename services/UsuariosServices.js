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
    

    usuarios.map(u=> { if (u.id == idUsuario){
    console.log ("Nome: "+ u.nome)
    console.log ("E-mail: "+ u.email)
    console.log("\nEndereços:")
    console.table(u.enderecos)
    console.log("\nFormas de Pagamento")
    console.table(u.formasDePagamento)
}})}


            
            
    
        // Seu código aqui


function remover(idDoUsuarioParaRemover){
    
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