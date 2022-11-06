//Acesso aos métodos HTTP
const express = require('express')
const cors = require('cors')

const server = express()
server.use(cors())
server.use(express.json())

//Lista de Alunos
let alunos = [
    {id:1, nome: 'João', Serie: 'Primeira série'},
    {id:2, nome: 'Maria', Serie: 'Segunda série'},
    {id:3, nome: 'Severina', Serie: 'Terceira série'},
]

//Método GET vai ver a lista de alunos
server.get('/alunos', (req, res) => {
    res.json({
        alunos
    })
})

//Método POST vai adicionar mais um aluno na lista
//Pegar os dados que vieram no body da requisição
//E insere na lista de alunos através do push
server.post('/alunos', (req, res) => {
    const aluno = req.body 
    alunos.push(aluno)

    res.send('Aluno cadastrado com sucesso!')

})

//Método PUT pra gente fazer edição de registros
server.put('/aluno/:id', (req, res) => { 
    const { id } = req.params                   //Aqui vamos pegar o "id" como o parâmetro pra localizar o objeto
    const indexDoAluno = alunos.findIndex(p => p.id == id) //Temos que achar o aluno na lista para mudá-lo

    alunos[indexDoAluno] = {
        ...alunos[indexDoAluno],
        ...req.body
    }

    res.send('Aluno atualizado com sucesso')
})

//Método delete para deletar algum parâmetro ou objeto
//Vamos pegar o array de produtos e subscrever sem o objeto correspondente ao "id" desejado na requisição
//Aqui a gente vai passar os parâmetro através do "Query params"
server.delete('/aluno', (req, res) => {
    const { id } = req.query
    
    alunos = alunos.filter(p => p.id != p)
    res.send('Id do aluno deletado com sucesso')
})


server.listen(5000, () => {
    console.log("Servidor rodando na porta 5000")
})