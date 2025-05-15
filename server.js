import express from 'express'

 /* const express = require('express')
 updatiar o package.json se utilizar import express from 'express', adicionando
 "type": "module" */


 /* servidor pode ser inicializado com "node (nome de arquivo [server.js])",
 para o servidor atualizar as mudanças no código automaticamente, nodemon deve estar
 inicializado no start (que também deve ser criado no arquivo package.json), e 
 o comando se torna "node start" */

    //linha 23 -> caminho, transformação, callback

//Inicializando o Servidor.


const server = express()
server.use(express.json())

//criar uma rota simples
server.options('/', (req, res)=>{
    res.status(200).json({msg:"Tudo Ok"})
    //Pode ser usado send em vez de json, e vice versa.
})

server.get('/tarefas', (req, res)=> {
    fs.readFile('./banco.json', (err, data) =>{
        if(err){
            res.status(500).json({erro:err})
        }
        res.status(200).json(data)
    })
})
    //listar UMA tarefa especifica, caso nao existir, retornar 404
    server.get('/tarefs/:id', (req, res)=> {
        const tarefa_id = req.params.id
        let msg = ''
        let cod_err = 200
            // ler o arquivo banco.json
    fs.readFile('./banco.json', 'utf-8', (err, data) =>{
        if(err){
            res.status(500).json({erro:err})
        }
        const lista_de_tarefas = JSON.parse(data)
        const tarefa = lista_de_tarefas.find((tarefa) => tarefa.id == tarefa_id)
        if (!tarefa) {
            res.status(404).json({err: "Item não encontrado!"})
        } else {
            res.send('ok')
        }
        res.status(cod_err).json({msg:msg})
        // procurar pela tarefa de ID informado (.find)
    })

    // ler o arquivo banco.json
    // procurar pela tarefa de ID informado (.find)
    // retornar 404 caso nao ache
    // retornar 200 e os dados da tarefa caso ache
    })

    //criar uma tarefa
    server.post('/tarefas', (req, res) => {
        const {titulo, descricao, dificuldades, user_id} = req.body
        console.log(titulo, descricao, dificuldade, user)
        res.send('ok')
    })
    //pegar as informações da nova tarefa, do body da requisição
    //lendo meu arquivo (readFile)
    //inserir a nova tarefa, no arquivo
    //salvar o arquivo (writeFile, apendFile)

    //atualizar uma tarefa
    //deletar uma tarefa

    //Criar uma CRUD em um arquivo json utilizando o Restful.

    //Mandar o servidor ouvir na porta 8000.

server.listen(8000, () => {console.log('Servidor rodando na porta 8000')})

