const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Environment variable configuration
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//Middlewires
app.use(cors());
app.use(express.json());

// Database connection
const url = process.env.ATLAS_URL;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Atlas is connected to the database successfully!!");
});

// Routers
const userRouter = require("./routes/user.router");
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server is up and running in port: ${port}`);
});
