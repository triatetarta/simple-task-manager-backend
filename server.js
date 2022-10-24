require("dotenv").config();
const express = require("express");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const connectDB = require("./db/connect");

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Simple Task Manager API");
});

const PORT = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("Connected to db ✅");
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`)
    );
  } catch (error) {
    console.log("Failed to connect to the db ❌");
    console.log(error);
  }
};

start();
