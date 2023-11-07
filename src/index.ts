import express from 'express';
import { transporter, mailOptions } from './mailer';

const app = express();
const port = 5000;

app.get('/', (request, response) => {
  response.send('Hello world!');
});

transporter.sendMail(mailOptions);

app.listen(port, () => console.log(`Running on port ${port}`));
