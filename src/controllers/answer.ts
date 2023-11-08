const express = require('express')
const Answer = require('../models/answer')

const getAllAnswers = (req, res, next) => {
  Answer.find({})
  .them((answers) => {
    res.send(answers)
  })
  .catch(next)
}

// Post
const createAnswer = (req, res, next) => {
  const { name, phone } = req.body;

  Answer.create({ name, phone })
    .then((answer) => {
      res.send(answer);
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  getAllAnswers,
  createAnswer
}