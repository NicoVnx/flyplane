import express from "express"
const server = express()
import routes from "./src/routes.js"
import pkg from 'mongoose';
const mongoose = pkg;

const uri = "mongodb+srv://nico:123321@cluster0.rtak1.mongodb.net/flyplaneDB?retryWrites=true&w=majority"




mongoose.Promise = global.Promise
mongoose.connect(uri, {
useNewUrlParser: true,
useUnifiedTopology: true,
}).then(() => {
console.log("MongoDB Conectado...")
}).catch((erro) => {
console.log("Houve um erro ao se conectar: " + erro)
})


server.use(express.static("public"))


server.use(express.urlencoded({ extended: true }))


server.set("view engine", "ejs")


server.use(routes)
server.listen(3000, () => console.log("Server Rodando!"))
