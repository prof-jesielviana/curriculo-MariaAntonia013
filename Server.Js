

Server.Js=====================================================
const express = require('express');
const bd = require('./bd')
const app = express()

app.use(bodyparser.json());

app.get('/',function(req, res) {
    res.send('<h1> Hello word! </h1>')
})
// ou pode-se usar esse!

/*app.get('/',(req, res) => {
    res.send('<h1> Hello word! </h1>')
})*/

app.get('api/alunos', (req, res) => {
    res.send(bd.getAlunos())
})

app.get('api/alunos/:id', (req, res) => {
    const id = req.params.id;
    res.send(bd.getAlunosPorId(id))
})

app.post('/api/alunos', (req, res) =>{
    bd.addAluno(req.body);
    res.send('Aluno adicionado com sucesso!');

})
app.get('api/professores', (req, res) => {
    res.send(bd.getProfessores())
})

app.get('api/professores/:id', (req, res) => {
    const id = req.params.id;
    res.send(bd.getProfessoresPorId(id))
})

app.post('/api/professores', (req, res) =>{
    bd.addProfessores(req.body);
    res.send('Professor adicionado com sucesso!');

})
app.listen(3000, () => console.log('servidor online'));

===========================================================
bd.js==


class Bd{
    constructor(){
        this.alunos =[];
        this.professores =[];
    }

    getAlunos(){
        return this.alunos;
    }

    getAlunosPorId(){
        return this.alunos.filter((aluno){
            return aluno.id == id;
        });
    }

    addAluno(aluno){
        this.alunos.push(aluno);
    }
    getProfessores(){
        return this.professores;
    }

    getProfessoresPorId(){
        return this.professores.filter((professores){
            return professores.id == id;
})}

    addProfessores(professores){
        this.professores.push(professores);
    }
}

module.exports = new Bd()
