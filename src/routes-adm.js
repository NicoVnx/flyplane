const express = require("express")
const admin = express.Router()
const views = __dirname + "/views/"

admin.get("/", (req, res) => res.render(views + "admin/login", {}))
admin.post("/home", (req, res) => res.render(views + "admin/home", {}))

module.exports = admin;
