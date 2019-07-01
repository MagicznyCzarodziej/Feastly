import mongoose from 'mongoose';

const FeedSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  category: String,
});

export default FeedSchema;
