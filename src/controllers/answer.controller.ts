const express = require('express')
const answerModel = require('../models/answer')

const getAllAnswers = (req, res, next) => {
  answerModel.find({})
  .them((answers) => {
    res.send(answers)
  })
  .catch(next)
}

// Post
const createAnswer = (req, res) => {
  const { name, phone } = req.body;

  answerModel.create({ name, phone })
    .then((answer) => {
      res.send(answer);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getAllAnswers,
  createAnswer
}