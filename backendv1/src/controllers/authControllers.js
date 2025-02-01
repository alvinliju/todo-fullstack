const { registerUserHelper, loginUserHelper } = require("../utils/authHelpers");

const registerUser = async (req, res) => {
  try {
    const { name, password, email } = req.body;
    // Validation
    if (!name || !password || !email) {
      return res.status(400).json({ error: "All fields are required" });
    }

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
    const { email, password } = req.body;
    const token = await loginUserHelper(email, password);
    res.status(200).json({ token: token });
  } catch (err) {
    res.status(500).json({ error: "Login Failed" });
  }
};

module.exports = { registerUser, loginUser };
