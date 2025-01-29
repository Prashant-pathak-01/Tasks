import express from "express";
import { login, signup } from "./controllers/user.js";
const route = express.Router();

route.post("/login", login);
route.post("/signup", signup);

export default route;
