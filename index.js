const http = require("http");
const mongoose = require("mongoose");
const express = require("express");
const authRouter = require("./public/authRouter");
const app = express();
const fs = require("fs");
const User = require("./models/users");
const Role = require("./models/role");
app.use(express.static(`${__dirname}/public`));
app.use(express.json);
app.use("/auth", authRouter);
app.get("/", (req, res) => {
  fs.createReadStream("index.html").pipe(res);
});

// app.get("/users", (req, res) => {
//   try {
//     const usersRes = User.find();
//     res.send("ok");
//   } catch (e) {
//     console.log(e);
//   }
// });
// app.post("/registration", (req, res) => {
//   try {
//     const { name, login, password } = req.body;
//     const foundUser = User.findOne({ login });
//     if (foundUser) {
//       res.json("User already exist");
//     }
//     const userRole = Role.findOne({ role: "user" });
//     const user = new User({ name, login, password, role: userRole.role });
//     user.save();
//     res.json("User saved");
//   } catch (e) {
//     console.log(e);
//   }
// });
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/AuthProject", { useNewUrlParser: true })
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(`DB connection error:${err}`));
app.listen(3000);
