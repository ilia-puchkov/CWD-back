import express from 'express';
import mongoose from 'mongoose';
require('dotenv').config();
const router= require('./routes/router')
import postModel from './models/post.model';
import Post from './interfaces/post.interface';

const app = express();
const port = 5000;

app.use(express.json());

mongoose.connect(`mongodb://localhost:27017/test`, {
  family: 4,
});

app.use(router)

app.listen(port, () => console.log(`Running on port ${port}`));
