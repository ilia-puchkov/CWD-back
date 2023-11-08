import mongoose from 'mongoose';
import Answer from 'src/interfaces/answer.interface';

const answerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  question1: {
    type: String,
    required: false,
  },
  question2: {
    type: String,
    required: false,
  },
  question3: {
    type: String,
    required: false,
  },
  question4: {
    type: String,
    required: false,
  },
  question5: {
    type: String,
    required: false,
  },
  question6: {
    type: String,
    required: false,
  },
});

const answerModel = mongoose.model<Answer & mongoose.Document>(
  'Answer',
  answerSchema
);

export default answerModel;
