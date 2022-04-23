require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDatabase = require("./db");
// import all routes
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

const app = express();

// connect to the Database
connectDatabase();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT : http://localhost:${PORT}`);
});
