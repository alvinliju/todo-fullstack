const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const { limiter } = require("./middlewares/rateLimitingMiddlware");

//creatind a write stream in append mode for save the log data
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" },
);

//importing routes
const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

//middlewares
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);


app.use(express.json());
app.use(morgan("dev"));
app.use(morgan("combined", { stream: accessLogStream })); // Log to file

//rate limiting
app.use(limiter);

app.get("/", (req, res) => {
  res.json({ message: "API is working" });
});

app.use("/auth", authRoutes);
app.use("/api/v1/todos", todoRoutes);

module.exports = app;
