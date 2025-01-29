import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  photo: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
