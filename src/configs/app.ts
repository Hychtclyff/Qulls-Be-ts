import express, { json, type Express } from "express";
import cors from "cors";
import apiV1 from "../routes/api/v1/index.js";
export const app: Express = express();

const corsOptions = {
  origin: ["*"],
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(json());
app.set("view engine", "ejs");

apiV1(app);
