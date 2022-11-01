//Criar um servidor
//Importar Expresss
const express= require ('express');
const res = require('express/lib/response');
//Criar servidor ou aplicação
const servidor = express();
// definir uma rota neste servidor
// - endereco,-metodo, - função callback(acao quando requisicao chegar)
servidor.get('/usuarios',(req,res)=>{console.log("chegou uma requisição")
res.send("nao aperte mais nenhum botao do navegador..")})
// por o servidor para rodar ( aguardando requisicao)
servidor.listen(3000);
