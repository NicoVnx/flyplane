const express = require("express")
const routes = express.Router()
const views = __dirname + "/views/"

  routes.get("/", (req, res) => res.render(views + "home", {}))

  routes.get("/viagem", (req, res) => res.render(views + "viagem", {}))
  routes.get("/sobre", (req, res) => res.render(views + "sobre", {}))
  routes.get("/destinos", (req, res) => res.render(views + "destinos", {}))

module.exports = routes;
