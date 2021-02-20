const express = require("express");
const app = express();
const router = require("./routes/routes");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
// mongoose config
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// middleware
app.use((req, res, next) => {
  if(req.headers.authenticated){
    return next();
  }
  return res.status(403).send("User not authenticated!");
});
//error handler
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/", router);
app.listen(3000, () => {
  console.log(`Listening on port ${3000}`);
});
