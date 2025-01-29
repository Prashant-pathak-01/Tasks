import express from "express";
import database from "./db.js";
import Routes from './routes.js'
import cors from 'cors';
import bodyParser from 'body-parser'
const app = express();
app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Routes);

database();
app.listen(8000, () => {
  console.log("Backend Connected");
});
