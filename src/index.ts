import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const router = require('./routes/router');

const app = express();
const port = 5500;

app.use(express.json());

mongoose.connect(`mongodb://localhost:27017/test`, {
  family: 4,
});

app.use(cors());

app.use(router);

app.listen(port, () => console.log(`Running on port ${port}`));
