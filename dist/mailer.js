"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailOptions = exports.transporter = void 0;
require('dotenv').config();
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});
exports.transporter = transporter;
const mailOptions = {
    from: 'createwowdate@gmail.com',
    to: 'createwowdate@gmail.com',
    subject: 'Новые данные формы',
    text: 'Text',
};
exports.mailOptions = mailOptions;
