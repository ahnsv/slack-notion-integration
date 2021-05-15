import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { clipMessage } from "./usecases/clipMessage";
import { SlackClient } from "./clients/slack";
import { NotionClient } from "./clients/notion";

dotenv.config();

const app = express();
export type AppClient = {
  slack: SlackClient;
  notion: NotionClient;
};
const appClient = {
  slack: new SlackClient(),
  notion: new NotionClient(),
};
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.post("/actions", async (req, res) => {
  clipMessage(req, appClient)
  return res.status(200).send();
});

const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`Listening on port ${process.env.PORT || 5000}`);
});
