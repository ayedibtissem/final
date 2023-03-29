const mongoose =require("mongoose");

const visitSchema = mongoose.Schema({
  title: String,
  description: String,
  name: String,
  creator: String,
tags:[String],
  imageFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  likeCount: {
    type: Number,
    default: 0,
  },
});

const VisitModal = mongoose.model("Visit", visitSchema);

module.exports= VisitModal;