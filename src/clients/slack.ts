import { ApplicationClient } from ".";
import { WebClient } from "@slack/web-api";
import { IntegrationEnvironmentError } from "../common/exceptions";

export class SlackClient extends ApplicationClient {
  public constructor() {
    const slackToken = process.env.SLACK_TOKEN;
    if (!slackToken) {
      throw new IntegrationEnvironmentError("SLACK_TOKEN을 찾을 수 없습니다");
    }
    super(slackToken);
  }

  public initialize_client(): WebClient | undefined {
    return new WebClient(this._token);
  }
}
