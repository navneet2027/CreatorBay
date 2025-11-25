const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  content: {
    type: String,
    required: [true, 'Description is required']
  },
  // image_url: {
  //   type: String,
  //   default: ''
  // },
  mediaUrl :{
    type:String,
    default:""
  },
  contentType : {
    type: String,
    default : "text"
  },
  thumbnailUrl:{
    type: String ,
    default : ""
  },
  access_type: {
    type: String,
    enum: ['free', 'paid'],
    default: 'free'
  },
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update timestamp on save
postSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Post', postSchema);