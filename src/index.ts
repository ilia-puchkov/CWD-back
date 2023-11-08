import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
require('dotenv').config()
import postModel from './models/post.model';
import Post from './interfaces/post.interface';

function createPost(request: express.Request, response: express.Response) {
  const postData: Post = request.body;
  const createdPost = new postModel(postData);
  createdPost.save()
    .then(savedPost => {
      response.send(savedPost);
    })
}

// https://wanago.io/2018/12/17/typescript-express-error-handling-validation/

const app = express();
const port = 5000;

app.use(bodyParser.json())

mongoose.connect(`mongodb://localhost:27017/test`, {
  family: 4,
});


app.get('/', (request, response) => {
  response.send({
    hostname: request.hostname,
    path: request.path,
    method: request.method,
  });
});

app.listen(port, () => console.log(`Running on port ${port}`));
