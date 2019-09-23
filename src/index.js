import uuidv4 from "uuid/v4";
import "dotenv/config";
import cors from "cors";
import express from "express";
import routes from "./routes";

import models from "./models";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1]
  };
  next();
});
app.use("/session", routes.session);
app.use("/users", routes.user);
app.use("/messages", routes.message);
app.get("/", (req, res) => {
  res.send("Received a GET method");
});
app.post("/", (req, res) => {
  res.send("Received a POST method");
});
app.put("/", (req, res) => {
  res.send("Received a PUT method");
});
app.delete("/", (req, res) => {
  res.send("Received a delete method");
});

app.listen(process.env.PORT, () => {
  console.log(`App started on ${process.env.PORT}`);
});
