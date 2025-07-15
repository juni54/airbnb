// core modules
import path from "path";

// 3rd party modules
import express from "express";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";
import cors from "cors";

// config
dotenv.config();

// routers & utils

import userRouter from "./routes/userRoutes.js";
import hostRouter from "./routes/hostRouter.js";
import rootPath from "./utils/pathUtils.js";


const app = express();

// view engine setup
app.set("views", path.join(rootPath, "views"));
app.set("view engine", "ejs");

//built-in middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //ye dono lines body parser hain
app.use(express.static("public"));

// routes
app.use("/", userRouter);
app.use("/host", hostRouter);



// 404 page
app.use((req, res) => {
  res.status(404).render("404");
});

//  optional: error handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Internal Server Error');
// });

const PORT = process.env.PORT || 3007;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost`);
  });
});
//app.listen(process.env.PORT);
