const { registerUserHelper, loginUserHelper } = require("../utils/authHelpers");
const {z} = require('zod')

//zod object to validate login credentials



const registerUser = async (req, res) => {

  const registerBody = z.object({
    email: z.string().email().min(6).max(100),
    name: z.string().min(3).max(100),
    password: z.string().min(6).max(20)
  })

  try {
    const parseData = registerBody.safeParse(req.body)
    if(!parseData.success){
      res.status(404).json({
        message:"Somethings wrong please try again",
        error: parseData.error.issues.map((issue) => issue.message )
      })
      return
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
      email:z.string().email().min(6).max(30),
      password: z.string().min(6).max(30)
    })

    const parseData = loginBody.safeParse(req.body)
    if(!parseData.success){
      res.status(404).json({
        message:"Somethings wrong please try again",
        error: parseData.error.issues.map((issue) => issue.message )
      })
      return
    }
    const {  email, password } = parseData.data;
    const token = await loginUserHelper(email, password);
    res.status(200).json({ token: token });
  } catch (err) {
    res.status(500).json({ error: "Login Failed" });
  }
};


module.exports = { registerUser, loginUser };
