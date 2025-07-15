import express from "express";
import { homePage } from '../controllers/homesControl.js';





const userRouter = express.Router();

userRouter.get("/", homePage);

export default userRouter;
 