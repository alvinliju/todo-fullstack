const Todo = require("../models/Todo");


const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.userId });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createNewTodo = async (req, res) => {
  try {
    const todo = new Todo({
      ...req.body,
      userId: req.userId, //assigning todo a user
    });
    await todo.save();
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { title, completed } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      { _id: req.params.id, userId: req.userId },
      {
        $set: {
          title: title,
          completed: completed,
        },
      },
      { new: true },
    );
    if (!todo) {
      res.status(404).send("comon dude dont play with me");
    }

    res.status(200).json(todo);
  } catch (err) {
    console.log(err);
  }
};

const updateTodoIsDone = async(req,res)=>{
  try{
  
  }catch(err){
    res.status(500).json({error: err.message})
  }
}

const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({_id: req.params.id,});
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.status(200).json({ message: "Todo deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllTodos,
  createNewTodo,
  updateTodo,
  deleteTodo,
};
