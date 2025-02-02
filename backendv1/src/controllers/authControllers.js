const User = require("../models/User");
const { registerUserHelper, loginUserHelper } = require("../utils/authHelpers");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const emailjs = require("emailjs");
const axios = require("axios");
require("dotenv").config();
const { Resent, Resend } = require("resend");

const registerUser = async (req, res) => {
  const registerBody = z.object({
    email: z.string().email().min(6).max(100),
    name: z.string().min(3).max(100),
    password: z.string().min(6).max(20),
  });

  try {
    const parseData = registerBody.safeParse(req.body);
    if (!parseData.success) {
      res.status(404).json({
        message: "Somethings wrong please try again",
        error: parseData.error.issues.map((issue) => issue.message),
      });
      return;
    }
    const { name, password, email } = parseData.data;

    const user = await registerUserHelper(name, email, password);
    return res.status(201).json({
      message: "Registration successful",
      userId: user._id,
    });
  } catch (err) {
    if (err.message === "User already exists") {
      return res.status(409).json({ error: err.message });
    }
    return res
      .status(500)
      .json({ error: "Registration failed", details: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const loginBody = z.object({
      email: z.string().email().min(6).max(30),
      password: z.string().min(6).max(30),
    });

    const parseData = loginBody.safeParse(req.body);
    if (!parseData.success) {
      res.status(404).json({
        message: "Somethings wrong please try again",
        error: parseData.error.issues.map((issue) => issue.message),
      });
      return;
    }
    const { email, password } = parseData.data;
    const token = await loginUserHelper(email, password);
    res.status(200).json({ token: token });
  } catch (err) {
    res.status(500).json({ error: "Login Failed" });
  }
};

const requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.body;
    //finding user form db
    const user = await User.findOne({ email });
    console.log(user);

    if (!user) {
      return res.status(404).json({ message: "Unexpected error occured" });
    }

    console.log("before signing tokens");
    const secret = process.env.SECRET + user.password;
    const token = jwt.sign({ id: user._id, email: user.email }, secret, {
      expiresIn: "1h",
    });

    console.log("after signing tokens");
    //crafting reset link to send to user via mail
    const resetURL = `https://todo-fullstack-sape.onrender.com/auth/resetpassword?id=${user._id}&token=${token}`;

    console.log("creafted the reset url");

    const resend = new Resend(process.env.RESENT_API);

    const mail = await resend.emails.send({
      from: "tofusupoort@resend.dev",
      to: "alvinliju44@gmail.com",
      subject: "Hello World",
      html: `<p>Your reset link is:${resetURL} </strong>!</p>`,
    });

    if (!mail) res.status(500).json({ message: "somethfdk fuck off" });

    res.status(200).json({ message: "Email send" });
  } catch (err) {
    res.status(500).json({ message: "something went wrong" });
  }
};

//reset password
const resetPassword = async (req, res) => {
  try {
    console.log("here");
    const { id, token } = req.query;
    const { password } = req.body;

    console.log("form reset pass");
    console.log(id, token, password);
    const user = await User.findById({ _id: id });
    console.log(user);

    if (!user) {
      return res.status(400).json({ message: "User not exists!" });
    }

    const secret = process.env.SECRET + user.password;
    const verify = jwt.verify(token, secret);
    if (!verify) res.status(404).json({ message: "unauthorized access" });
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: hashedPassword,
        },
      },
    );

    res.status(200).json({ message: "Password has been reset" });
  } catch (err) {
    res.status(500).json({ message: "something went wrong" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  resetPassword,
  requestPasswordReset,
};
