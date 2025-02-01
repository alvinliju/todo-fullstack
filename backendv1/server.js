const connectDB = require("./src/db/index");
const app = require("./src/index.js");

const PORT = 3000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (err) {
    console.log("Failed to start server", err);
  }
};

startServer();
