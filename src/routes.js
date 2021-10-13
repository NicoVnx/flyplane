import express from "express"
import  { newUser }  from "./models/Users.js"

const routes = express.Router()
const views = "C:/Users/nicov/code/flyplane/src" + "/views/"

import session from "express-session"

routes.use(session({
secret: "adnji3fi9n3d",
resave: true,
saveUninitialized: true
}))


  var valida = 0
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

  routes.get("/", (req, res) => res.render(views + "home", {}))

  
  routes.get("/sobre", (req, res) => res.render(views + "sobre", {}))

  routes.get("/destinos", (req, res) => res.render(views + "destinos", {}))

  routes.get("/viagem", (req, res) => {

  if(perfilViagem.length >= 1){for(var i = 0; i = perfilViagem.length; i++){perfilViagem.shift()}}
  if(destinoViagem.length >= 1){for(var i = 0; i = destinoViagem.length; i++){destinoViagem.shift()}}
    valida = 0

    var sessionValida = req.session.valida
    console.log('session valida: ' + sessionValida)

    res.render(views + "viagem", {sucesso, erro, valida, erroPerfil, perfil, praia, desc, hist, mont, destinoFinal, sessionValida})

  })

  routes.post("/viagemEmail", (req, res) =>{
    if(perfilViagem.length >= 1){for(var i = 0; i = perfilViagem.length; i++){perfilViagem.shift()}}
    if(destinoViagem.length >= 1){for(var i = 0; i = destinoViagem.length; i++){destinoViagem.shift()}}

  //Valida Email
  var validateEmail = function(email) {var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;return re.test(email)}
  if(!req.body.email || typeof req.body.email == undefined || req.body.email == null) { 
    valida = 1
     }
  if(validateEmail(req.body.email) == false){ 
    valida = 1
    
   }
  else{ valida = 2 
  
  req.session.valida = valida

  new newUser({

    email: req.body.email,

}).save()
.then(() => {
    console.log("Email cadastrado")
}).catch((erro) => {
    console.log("Houve um erro " + erro)
})

}

  
  
  var sessionValida = req.session.valida
  console.log('session valida: ' + sessionValida)

  res.render(views + "viagem", {sucesso, erro, valida, erroPerfil, perfil, praia, desc, hist, mont, destinoFinal, sessionValida})

  })

  routes.post("/viagemQuest", (req, res) =>{

    if(perfilViagem.length >= 1){for(var i = 0; i = perfilViagem.length; i++){perfilViagem.shift()}}
    if(destinoViagem.length >= 1){for(var i = 0; i = destinoViagem.length; i++){destinoViagem.shift()}}

    if(!req.body.one || typeof req.body.one == undefined || req.body.one == null || !req.body.two || typeof req.body.two == undefined || req.body.two == null
      || !req.body.three || typeof req.body.three == undefined || req.body.three == null || !req.body.four || typeof req.body.four == undefined || req.body.four == null
      || !req.body.five || typeof req.body.five == undefined || req.body.five == null)
      {valida = 3}
      else{
        valida = 4
      perfilViagem.push(req.body.one, req.body.two, req.body.three, req.body.four, req.body.five)
    
      req.session.valida = valida

    }

      var counts = {};
   perfilViagem.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });


        var maior = -Infinity;

        
      for(var prop in counts) {
    // ignorar propriedades herdadas
    if(counts.hasOwnProperty(prop)) { 
         if(counts[prop] > maior) {
             maior = counts[prop];
             perfil = prop;
         }
    }
}

var sessionValida = req.session.valida
console.log('session valida: ' + sessionValida)
      res.render(views + "viagem", {sucesso, erro, valida, erroPerfil, perfil, praia, desc, hist, mont, destinoFinal, sessionValida})

  })

  routes.post("/viagemQuestFinal", (req, res) => {
    if(perfilViagem.length >= 1){for(var i = 0; i = perfilViagem.length; i++){perfilViagem.shift()}}
    if(destinoViagem.length >= 1){for(var i = 0; i = destinoViagem.length; i++){destinoViagem.shift()}}


    if(!req.body.oneF || typeof req.body.oneF == undefined || req.body.oneF == null || !req.body.twoF || typeof req.body.twoF == undefined || req.body.twoF == null
     || !req.body.threeF || typeof req.body.threeF == undefined || req.body.threeF == null)
    {valida = 5}else{
      valida = 6
      req.session.valida = valida}
  
    destinoViagem.push(req.body.oneF, req.body.twoF, req.body.threeF)
console.log(destinoViagem)
    var counts = {};
    destinoViagem.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
 
 
         var maior = -Infinity;
 
         
       for(var prop in counts) {
     // ignorar propriedades herdadas
     if(counts.hasOwnProperty(prop)) { 
          if(counts[prop] > maior) {
              maior = counts[prop];
              destinoFinal = prop;
          }
     }
 }
 
 var sessionValida = req.session.valida
    console.log('session valida: ' + sessionValida)
    res.render(views + "viagem", {sucesso, erro, valida, erroPerfil, perfil, praia, desc, hist, mont, destinoFinal, sessionValida})

  })

  routes.post("/viagem", (req, res) => {

    var sessionValida = undefined

    res.render(views + 'viagem', {sucesso, erro, valida, erroPerfil, perfil, praia, desc, hist, mont, destinoFinal, sessionValida})

  })

  routes.post("/viagemBack", (req, res) => {

    var sessionValida = req.session.valida
    sessionValida = sessionValida - 2 
console.log(sessionValida)
    res.render(views + 'viagem', {sucesso, erro, valida, erroPerfil, perfil, praia, desc, hist, mont, destinoFinal, sessionValida})

  })

  export default routes