const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const commentrouter = require("./routes/comments");

mongoose
  .connect("mongodb://localhost:27017/PC06", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connected"))
  .catch(() => console.log("db not  connected"));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/api", commentrouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
