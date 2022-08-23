const express = require("express");
const app = express();
const port = 5000;

const db = require("./database/db");
const commentRouter = require("./routes/commentRouter");
app.use(express.json());
//app.use("/articles", articlesRouter);
const userRouter = require("./routes/userRouter");
const loginRouter = require("./routes/loginRouter");
const postRouter = require("./routes/postRouter");
const friendRouter = require("./routes/friendRouter");
app.use("/comment", commentRouter);
app.use("/user", userRouter);
app.use("/login", loginRouter);
app.use("/post", postRouter);
app.use("/friend", friendRouter);

app.listen(port, () => {
  console.log("server working");
});
