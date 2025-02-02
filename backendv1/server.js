const connectDB = require("./src/db/index");
const app = require("./src/index.js");
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Connect to database
connectDB();

// Health check route directly in server.js
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// For local development
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export for Render
module.exports = app;
