import express from "express"
import  { User }  from "./models/Users.js"
import session from "express-session"

const routes = express.Router()
const views = "C:/Users/nicov/code/flyplane/src" + "/views/"

routes.use(session({
secret: "adnji3fi9n3d",
resave: true,
saveUninitialized: true
}))


var valida 

const sucesso = ""
const erro = "* Email Inválido"
const erroPerfil = "* Preencha tudo"

var perfilViagem = []
var destinoFinal
var perfil

var destinoViagem = []
var praia = ['alagoas', 'cancun']
var desc = ['ilhas salomão', 'Serra Leoa']
var hist = ['roma', 'fortaleza']
var mont = ['roraima', 'suiça']

routes.get("/", (req, res) => {

    
    res.render(views + "home", {})
})

routes.get("/sobre", (req, res) => res.render(views + "sobre", {}))

routes.get("/destinos", (req, res) => res.render(views + "destinos", {}))



routes.get("/viagem", (req, res) => {

  if(perfilViagem.length >= 1){for(var i = 0; i = perfilViagem.length; i++){perfilViagem.shift()}}
  if(destinoViagem.length >= 1){for(var i = 0; i = destinoViagem.length; i++){destinoViagem.shift()}}
    

  console.log("V " + valida)

  res.render(views + "viagem", {sucesso, erro, valida, erroPerfil, perfil, praia, desc, hist, mont, destinoFinal})

})

routes.post("/viagemEmail", (req, res) =>{

  //Valida Email
  var validateEmail = function(email) {var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;return re.test(email)}
  if(!req.body.email || typeof req.body.email == undefined || req.body.email == null) { valida = 1} 
  if(validateEmail(req.body.email) == false){ valida = 1 }

  else{

    req.session.email = req.body.email

      User.findOne({email:req.body.email}).then((user) =>{

      console.log('existe ' + req.session.email)
      valida = user.valida
      perfil = user.perfil
      destinoFinal = user.dest
      
      res.redirect("/viagem")

    }).catch(()=>{ 
      console.log('não existe ' + req.session.email)
    new User({

      email: req.body.email,
      valida: 2,
      perfil: "ns",
      dest: "ns"

    }).save()
    .then(() => {
        console.log("Email cadastrado")
    }).catch((erro) => {
        console.log("Houve um erro " + erro)
    })
res.render(views + "viagem", {sucesso, erro, valida, erroPerfil, perfil, praia, desc, hist, mont, destinoFinal})
  })
  }

  console.log('V ' + valida)

  

})

routes.post("/viagemQuest", (req, res) =>{

    if(!req.body.one || typeof req.body.one == undefined || req.body.one == null || !req.body.two || typeof req.body.two == undefined || req.body.two == null
    || !req.body.three || typeof req.body.three == undefined || req.body.three == null || !req.body.four || typeof req.body.four == undefined || req.body.four == null
    || !req.body.five || typeof req.body.five == undefined || req.body.five == null)
    { valida = 3 }
    else{

      console.log(req.session.email)
    valida = 4

    perfilViagem.push(req.body.one, req.body.two, req.body.three, req.body.four, req.body.five)
    var counts = {};
    perfilViagem.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });

      var maior = -Infinity
    for(var prop in counts) {
  
  if(counts.hasOwnProperty(prop)) { 
        if(counts[prop] > maior) {
            maior = counts[prop]
            perfil = prop
        }
  }
}
User.findOne({email:req.session.email}).then((user)=>{
console.log('achei!')
  user.valida = valida
  user.perfil = perfil

  user.save().then(() =>{ 

    console.log('user salvo com sucesso!')

}).catch((err) =>{

    
  console.log('Erro interno ao editar user' + err)
    
})

}).catch((err)=>{console.log(err)})
}
console.log('V ' + valida)


res.render(views + "viagem", {sucesso, erro, valida, erroPerfil, perfil, praia, desc, hist, mont, destinoFinal})

})

routes.post("/viagemQuestFinal", (req, res) => {

  if(!req.body.oneF || typeof req.body.oneF == undefined || req.body.oneF == null || !req.body.twoF || typeof req.body.twoF == undefined || req.body.twoF == null
  || !req.body.threeF || typeof req.body.threeF == undefined || req.body.threeF == null){valida = 5}
  else{
    console.log(req.session.email)
    valida = 6

  destinoViagem.push(req.body.oneF, req.body.twoF, req.body.threeF)

  var counts = {};
  destinoViagem.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
        var maior = -Infinity;

      for(var prop in counts) {
    
    if(counts.hasOwnProperty(prop)) { 
        if(counts[prop] > maior) {
            maior = counts[prop];
            destinoFinal = prop;
        }
    }
}

User.findOne({email:req.session.email}).then((user)=>{
console.log("achei!")
  user.valida = valida
  user.dest = destinoFinal

  user.save().then(() =>{ 

    console.log('user salvo com sucesso!')

}).catch((err) =>{

    
  console.log('Erro interno ao editar user' + err)
    
})

}).catch((err)=>{console.log(err)})






}
  console.log('V ' + valida)
  res.render(views + "viagem", {sucesso, erro, valida, erroPerfil, perfil, praia, desc, hist, mont, destinoFinal})

})

routes.post("/viagemBack", (req, res) => {

  valida = valida - 2  
console.log('V ' + valida)

User.findOne({email:req.session.email}).then((user)=>{

  user.valida = valida

  user.save().then(() =>{ 

    console.log('user salvo com sucesso!')

}).catch((err) =>{

    
  console.log('Erro interno ao editar user' + err)
    
})

}).catch((err)=>{console.log(err)})
  res.render(views + 'viagem', {sucesso, erro, valida, erroPerfil, perfil, praia, desc, hist, mont, destinoFinal})

})

routes.post("/viagem", (req, res) => {
valida = 2
  User.findOne({email:req.session.email}).then((user)=>{

    
    user.valida = valida

    user.save().then(() =>{ 

      console.log('user salvo com sucesso!')
  
  }).catch((err) =>{
  
      
    console.log('Erro interno ao editar user' + err)
      
  })

  }).catch((err)=>{

    console.log(err)

  })

  res.render(views + 'viagem', {sucesso, erro, valida, erroPerfil, perfil, praia, desc, hist, mont, destinoFinal})

})


export default routes