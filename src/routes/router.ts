import express from 'express';

import postModel from '../models/post.model';
import Post from '../interfaces/post.interface';

const router = express.Router()

function createPost(request: express.Request, response: express.Response) {
  const postData: Post = request.body;
  const createdPost = new postModel(postData);
  createdPost.save().then((savedPost) => {
    response.send(savedPost);
  });
}

function getAllPosts(request: express.Request, response: express.Response) {
  postModel.find().then((posts) => {
    response.send(posts);
  });
}

router.get('/posts', (req: express.Request, res: express.Response) => {
  getAllPosts(req, res);
});

router.post('/', (req: express.Request, res: express.Response) => {
  createPost(req, res);
});

module.exports = router