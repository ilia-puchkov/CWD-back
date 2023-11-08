import mongoose from 'mongoose';
import Post from '../interfaces/post.interface';

const postSchema = new mongoose.Schema({
  author: String,
  content: String,
  title: String,
});

const postModel = mongoose.model<Post & mongoose.Document>('Post', postSchema);

export default postModel;
