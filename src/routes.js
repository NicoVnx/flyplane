import express from "express"
import  { User }  from "./models/Users.js"
import session from "express-session"
//import { sendMail } from "../public/script/sendMail.js"


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

var emailPerfil

var erroV = false
var destinoViagem = []
var praia = ['copacabana', 'cancún']
var desc = ['ilhas salomão', 'primavera do leste']
var hist = ['roma', 'ouro preto']
var mont = ['amajari', 'interlaken']

var checkOne = "ns"
var checkTwo = "ns"
var checkThree = "ns"
var checkFour = "ns"
var checkFive = "ns"

routes.get("/", (req, res) => {

  if(req.session.email){
    emailPerfil = req.session.email } 
    res.render(views + "home", {emailPerfil, valida})
})

routes.get("/sobre", (req, res) => {res.render(views + "sobre", {emailPerfil, valida})
if(req.session.email){
  emailPerfil = req.session.email } })

routes.get("/destinos", (req, res) => {res.render(views + "destinos", {emailPerfil, valida})
if(req.session.email){
  emailPerfil = req.session.email } })



routes.get("/viagem", (req, res) => {

  if(perfilViagem.length >= 1){for(var i = 0; i = perfilViagem.length; i++){perfilViagem.shift()}}
  if(destinoViagem.length >= 1){for(var i = 0; i = destinoViagem.length; i++){destinoViagem.shift()}}
  
  if(req.session.email){
  emailPerfil = req.session.email } 

  console.log("V " + valida)
checkOne = 
  res.render(views + "viagem", {sucesso, erro, erroV, valida, erroPerfil, perfil, praia, desc, hist, mont, destinoFinal,
    checkOne, checkTwo, checkThree, checkFour, checkFive, emailPerfil})
  erroV = false

})

routes.post("/viagemEmail", (req, res) =>{

  //Valida Email
  var validateEmail = function(email) {var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;return re.test(email)}
  if(validateEmail(req.body.email) == false){ erroV = true
    console.log(erro)
  res.redirect('/viagem')}

  else{
    erroV = false
    req.session.email = req.body.email
    
    
      User.findOne({email:req.body.email}).then((user) =>{

      console.log('existe ' + req.session.email)
      valida = user.valida
      perfil = user.perfil
      destinoFinal = user.dest
      
      res.redirect("/viagem")

    }).catch(()=>{ 

      //sendMail(req.body.email)

      console.log('não existe ' + req.session.email)
    new User({

      email: req.body.email,
      valida: 1,
      perfil: "ns",
      dest: "ns",
     checkOne: "ns",
  checkTwo: "ns",
  checkThree: "ns",
  checkFour: "ns",
  checkFive: "ns",

    }).save()
    .then(() => {
        console.log("Email cadastrado")
    }).catch((erro) => {
        console.log("Houve um erro " + erro)
    })
    valida = 1
    res.redirect("/viagem")
  })
  }
 
  
  console.log('V ' + valida)

  

})

routes.post("/viagemQuest", (req, res) =>{

    if(!req.body.one || typeof req.body.one == undefined || req.body.one == null || !req.body.two || typeof req.body.two == undefined || req.body.two == null
    || !req.body.three || typeof req.body.three == undefined || req.body.three == null || !req.body.four || typeof req.body.four == undefined || req.body.four == null
    || !req.body.five || typeof req.body.five == undefined || req.body.five == null)
    { erroV = true }
    else{
      erroV = false
      console.log(req.session.email)
    valida = 2

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
  user.checkOne = req.body.one
  user.checkTwo = req.body.two
  user.checkThree = req.body.three
  user.checkFour = req.body.four
  user.checkFive = req.body.five

  user.save().then(() =>{ 

    console.log('user salvo com sucesso!')

}).catch((err) =>{

    
  console.log('Erro interno ao editar user' + err)
    
})

}).catch((err)=>{console.log(err)})
}
console.log('V ' + valida)
res.redirect("/viagem")

})

routes.post("/viagemQuestFinal", (req, res) => {
console.log(destinoFinal)
  if(!req.body.oneF || typeof req.body.oneF == undefined || req.body.oneF == null || !req.body.twoF || typeof req.body.twoF == undefined || req.body.twoF == null
  || !req.body.threeF || typeof req.body.threeF == undefined || req.body.threeF == null){erroV = true}
  else{
    erroV = false
    console.log(req.session.email)
    valida = 3

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
  res.redirect("/viagem")

})

routes.post("/viagemBack", (req, res) => {

  if(valida == 1){
    valida = undefined

req.session.destroy()

}
  else if(valida == 2){
    valida = 1
  }

  else if(valida == 3){

    req.session.destroy()
    valida = undefined


  }

console.log('V ' + valida)



  res.redirect('/viagem')

})

routes.post("/viagemRe", (req, res) => {

valida = 1
  User.findOne({email:req.session.email}).then((user)=>{

    
    user.valida = valida
    user.perfil = "ns"
    user.dest = "ns"

    user.save().then(() =>{ 

      console.log('user salvo com sucesso!')
  
  }).catch((err) =>{
  
      
    console.log('Erro interno ao editar user' + err)
      
  })

  }).catch((err)=>{

    console.log(err)

  })

  res.redirect("/viagem")

})


export default routes