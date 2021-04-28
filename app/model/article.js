'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const PostSchema = new Schema({
    id: {
      type: Number,
    },
    title: {
      type: String,
    },
    isCompleted: {
      type: Boolean,
    },
  });
  return mongoose.model('Article', PostSchema, 'user');
};