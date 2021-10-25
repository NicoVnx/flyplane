export const sendMail = function(email){

   import nodemailer from "nodemailer";

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
    html: 'Obrigado'

  }

  remetente.sendMail(emailASerEnviado, function(error){

    if (error) {
    console.log(error)
    } else {
    console.log('Email enviado com sucesso para:')
    console.log(email)
    }

  });

  

}