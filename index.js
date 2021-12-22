const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');

//usando  EJS
app.set('view engine', 'ejs');
app.use(express.static('public'));

// confing body-parser
app.use(bodyParser.urlencoded ({extended: false}))
app.use(bodyParser.json());

//conexão com o banco
connection.authenticate().then(() =>{
  console.log(":D");
}).catch((err) =>{
  console.log("erro");
})


app.get('/', function(req, res) {
  Pergunta.findAll({raw: true, order:[
    ['id','DESC']
  ]}).then(pergunta => {
    res.render("index", {
      pergunta: pergunta
    });
  });
});
app.get('/perguntar', function(req, res) {
    
  res.render("perguntar");
})
app.post('/save', function(req, res) {
  var titulo = req.body.titulo;
  var perguntar = req.body.pergunta;

  Pergunta.create({
    titulo: titulo,
    description: perguntar
  });
});

app.get('/pergunta/:id', (req,res) => {
  var id = req.params.id;
  Pergunta.findOne({
    where: {id: id}
  }).then((pergunta) => {
    if(pergunta != undefined){
      res.render("pergunta");
    }else{
      res.redirect("index")
    }
  })
})

//iniciado servidor
app.listen(8181,(erro)=> {
    console.log("servidor iniciado!!");
})
