import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minLength: [2, "Name must be at least 3 characters"],
      maxLength: [50, "Name must be at most 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
      minLength: [5, "Email must be at least 5 characters"],
      maxLength: [100, "Email must be at most 100 characters"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [6, "Password must be at least 6 characters"],
    },
  },

  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

// { name: 'John Doe', email: 'john@mail.com', password: 'hashedpassword123' }
