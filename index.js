const express = require("express");
const app = express()
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const PORT = 3002;
const { registerValidation,loginValidation, postCreateValidation } = require("./validation.js");
const { validationResult } = require("express-validator");
const { User } = require("./models/User")
const UserModel = require("./models/User.js")
const checkAuth = require("./utils/checkAuth")
const bcrypt = require("bcrypt")
const {register,getMe,login} = require('./controllers/UserController')
const {update,create,remove,getAll,getOne,getLastTags}= require('./controllers/PostController')


mongoose
  .connect(
    "mongodb+srv://admin:wwwwww@cluster0.cefdl0r.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => console.log("db ok"))
  .catch((err) => console.log("db error", err));

app.use(express.json());

app.post("/auth/login",loginValidation, login)
app.post("/auth/register",registerValidation, register)
app.get("/auth/me",checkAuth,getMe)
// posts
app.get("/posts",getAll)
app.get("/posts/:postId",getOne)
app.get("posts/tags",getLastTags)
app.post('/posts',checkAuth,postCreateValidation,create)
app.delete('/posts/:id', checkAuth, remove)
app.patch(
  '/posts/:id',
  checkAuth,
  postCreateValidation,
  update
);  


app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("ok");
});
