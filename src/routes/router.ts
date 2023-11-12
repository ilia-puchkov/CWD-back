import express from "express";

const router = express.Router();

import { getAllPosts, createPost } from "../controllers/post.controllers";
import { getAllAnswers, createAnswer } from "../controllers/answer.controller";

// Work with posts - test
router.get("/posts", getAllPosts);
router.post("/", createPost);

// Work with asnwers
router.get("/answers", getAllAnswers);
router.post("/answers", createAnswer);

module.exports = router;
