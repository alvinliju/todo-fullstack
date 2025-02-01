const express = require("express");

//importing routes
const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");

const app = express();
//middlewares
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/api/v1/todos", todoRoutes);

module.exports = app;
