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
let criptografarSenha=bcrypt.hashSync(objeto.senha, 10);
console.log(criptografarSenha)

let arrayDeUsuarios= { id:         22,
                       nome:       objeto.nome,
                       email:      objeto.email,
                       senha:      criptografarSenha.senha,
                       enderecos:  [objeto.enderecos],
                       pagamentos: [objeto.formasDePagamento],
}
//salvar(arrayDeUsuarios); // testando o salvar com o cadastro, ok!
}                 
                                      

function detalhar(idUsuario){
    

    usuarios.map(u=> { if (u.id == idUsuario){
    console.log ("Nome: " + u.nome)
    console.log ("E-Mail: " + u.email)
    console.log("\nEndereços:")
    console.table(u.enderecos)
    console.log("\nFormas de Pagamento")
    console.table(u.formasDePagamento)

    }})}

         
function remover(idDoUsuarioParaRemover){
 for (let i=0;i<usuarios.length;i++) {
    
    if (usuarios[i].id == idDoUsuarioParaRemover){
       
      usuarios.splice(i, 1)
    }
        
}
 console.log(usuarios)   
 const fs = require('fs')       
fs.writeFileSync('C:/AulasDigitalHouse/pizzaria/databases/usuarios.json',JSON.stringify(usuarios, null, 4))
}
    

    


function alterar(novosDados, idUsuario){
    const bcrypt=require ('bcrypt');
    var senhacripto=bcrypt.hashSync(novosDados.senha,10);

    for(i=0;i<usuarios.length;i++){
        if(usuarios[i].id == idUsuario){
            usuarios[i].nome=novosDados.nome;
            usuarios[i].email=novosDados.email;
            usuarios[i].senha=senhacripto;
        }
    fs.writeFileSync('C:/AulasDigitalHouse/pizzaria/databases/usuarios.json',JSON.stringify(usuarios,null,4)) }
    
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