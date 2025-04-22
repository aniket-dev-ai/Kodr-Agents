import mongoose from "mongoose";
import configData from "../config/config";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.post("save", async function (next) {
  if (this.token && this.token.isModified()) {
    this.token = cryptojs.AES.encrypt(
      this.token,configData.SECRET_KEY
    ).toString();
    await this.save();
  }
});

module.exports = mongoose.model("User", userSchema);

export default userSchema;