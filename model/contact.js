const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    TweetDate: {
      type: Date,
      required: true,
    },
    TweetName: {
      type: String,
      required: true,
    },

    newtweet: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const twitteruser = mongoose.model("twitteruser", userSchema);
module.exports = twitteruser;
