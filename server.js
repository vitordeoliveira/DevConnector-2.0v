const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

// Connect DataBase
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));
// app.get("/", (req, res) => res.send("API Running"));

//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

//Serve static assest in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("my-app/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "my-app", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
