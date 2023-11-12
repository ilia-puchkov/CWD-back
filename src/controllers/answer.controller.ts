import express from "express";

import Answer from "../interfaces/answer.interface";
import answerModel from "../models/answer.model";

// Create new answer
function createAnswer(request: express.Request, response: express.Response) {
  const answerData: Answer = request.body;
  const createdPost = new answerModel(answerData);
  createdPost.save().then((savedPost) => {
    response.send(savedPost);
  });
}

// Get all saved answers
function getAllAnswers(request: express.Request, response: express.Response) {
  answerModel.find().then((posts) => {
    response.send(posts);
  });
}

export { getAllAnswers, createAnswer };
