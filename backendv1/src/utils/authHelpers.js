const User = require("../models/User");

const registerUserHelper = async function (name, email, password) {
  try {
    const user = new User({ name, email, password });
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists");
    }
    const savedUser = await user.save();
    console.log("User registered", user);
    return savedUser;
  } catch (error) {
    console.log("error logging in");
    throw error;
  }
};

const loginUserHelper = async function (email, password) {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }

    const isMatch = await user.isValidPassword(password);
    if (!isMatch) {
      throw new Error("Invalid Password");
    }

    const token = await user.generateAuthToken();

    return token;
    console.log("Login successful!");
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = { registerUserHelper, loginUserHelper };
