sendMail = function(email, id, nomeC){

  const nodemailer = require('nodemailer')
  const pedidoId = id


  var remetente = nodemailer.createTransport({

      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
          user: 'nicolas.viana7spam@gmail.com',
          pass: '38483315n'
      }

  })

  var emailASerEnviado = {

    from: 'nicolas.viana7spam@gmail.com',
    to: email,
    subject: 'Cadastro foi feito com sucesso!',
    html: 'A PASS! Viagens agradeça a preferência! Para editar ou visualizar seu pedido clique aqui -> http://127.0.0.1:3000/admin/editar/' + pedidoId 

  }

  var emailASerEnviadoConf = {

    from: 'nicolas.viana7spam@gmail.com',
    to: 'nicolas.viana7spam@gmail.com',
    subject: 'Novo pedido cadastrado!',
    html: 'Um novo usuário fez um pedido, http://127.0.0.1:3000/admin/ - Nome: ' + nomeC

  }

  remetente.sendMail(emailASerEnviado, function(error){

    if (error) {
    console.log(error)
    } else {
    console.log('Email enviado com sucesso.')
    console.log(email)
    }

  });

  remetente.sendMail(emailASerEnviadoConf, function(error){

    if (error) {
    console.log(error)
    } else {
    console.log('Email enviado com sucesso.')
    console.log(nomeC)
    }

  });

}

module.exports = sendMail