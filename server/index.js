require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const cors = require("cors");
const helmet = require("helmet");

//routers
const userRouter = require("./routers/user");
const authRouter = require("./routers/auth");
const soundRouter = require("./routers/sound");

const app = express();

//MIDDLEWARES
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

//connect database
require("./utils/mongo");

//ROUTES
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/sound", soundRouter);

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log("listening the server on " + PORT);
});
