const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: Number,
  username: String,
  password: String,
  money: Number,
  darkmode: Boolean,
  invisible: Boolean,
  allowCommentsOnTrades: Boolean,
  followed: [{ userId: Number, username: String }],
  following: [{ userId: Number, username: String }],
  stocks: [
    {
      stockId: Number,
      ticker: String,
      name: String,
      about: String,
      creation: String,
      prediction: Number,
      comments: [
        {
          userId: String,
          username: String,
          timestamp: Number,
          text: String,
          likes: Number,
          dislikes: Number,
        },
      ],
    },
  ],
  shares: [{ stockId: Number, shares: Number }],
  trades: [
    {
      ticker: String,
      title: String,
      timestamp: Number,
      shares: Number,
      gain: Number,
    },
  ],
  referenceTrades: [
    {
      tradeAuthorUsername: String,
      tradeAuthorID: Number,
      ticker: String,
      title: String,
      timestamp: Number,
      shares: Number,
      gain: Number,
    },
  ],
  comments: [
    {
      userId: String,
      username: String,
      timestamp: Number,
      text: String,
      likes: Number,
      dislikes: Number,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);