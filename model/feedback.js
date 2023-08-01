const mongoose = require("mongoose");
const feedbackmodel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
});
const feedbacks = mongoose.model("feedback", feedbackmodel);
module.exports = feedbacks;
