"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mailer_1 = require("./mailer");
const app = (0, express_1.default)();
const port = 5000;
app.get('/', (request, response) => {
    response.send('Hello world!');
});
mailer_1.transporter.sendMail(mailer_1.mailOptions);
app.listen(port, () => console.log(`Running on port ${port}`));
