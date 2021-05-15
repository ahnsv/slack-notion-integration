import express from "express";
import { AppClient } from "..";
import { modal } from "../common/views";

export const clipMessage = async (req: express.Request, appClient: AppClient) => {
  const payload = JSON.parse(req.body?.payload);

  const slackClient = appClient.slack.client
  if (!slackClient) {
      return 
  }
  const modalResult = await slackClient.views.open({
      trigger_id: payload?.trigger_id,
      token: slackClient.token,
      view: modal(payload)       
  })
};
