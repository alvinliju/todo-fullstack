const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const {
  getAllTodos,
  createNewTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoControllers");

const router = express.Router();

//protecting all routes
router.use(verifyToken);

//Todo Routes
router.get("/", getAllTodos);
router.post("/", createNewTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
