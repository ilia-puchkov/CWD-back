require('dotenv').config()

import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
})

const mailOptions = {
  from: 'createwowdate@gmail.com',
  to: 'createwowdate@gmail.com',
  subject: 'Новые данные формы',
  text: 'Text',
}

export {
  transporter,
  mailOptions,
}