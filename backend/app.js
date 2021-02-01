const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
//const { Parser } = require('@angular/compiler/src/ml_parser/parser');
const mongoose = require("mongoose");

const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");

const app = express();

mongoose.connect(
  "mongodb+srv://sherin-46:" +
  process.env.MONGO_ATLAS_PW +
  "@cluster0.du0zk.mongodb.net/node-angular?retryWrites=true&w=majority"
  )
.then(() => {
  console.log('Connected to database!!');
})
.catch(() => {
  console.log('Connection failed!');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));


app.use((req, res, next) =>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes);

module.exports = app;
