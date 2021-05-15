import { Client, APIErrorCode } from "@notionhq/client";
import { ApplicationClient } from ".";
import { ClientInitializationError, IntegrationEnvironmentError } from "../common/exceptions";

export class NotionClient extends ApplicationClient {
  notion_client: Client | undefined;
  public constructor() {
    const notionToken = process.env.NOTION_TOKEN;
    if (!notionToken) {
      throw new IntegrationEnvironmentError("NOTION_TOKEN을 찾을 수 없습니다");
    }
    super(notionToken);
    this.notion_client = this.initialize_client()
  }

  public initialize_client(): Client {
    try {
      return new Client({
        auth: this._token,
      });
    } catch (error) {
        if (error.code === APIErrorCode.Unauthorized) {
            throw new ClientInitializationError("Notion Client를 만드는데 실패했습니다")
        }
        return new Client();
    }
  }

  public get client(): Client {
    if (!this.notion_client) {
      throw new Error()
    }
    return this.notion_client;
  }

  public async search(query: string) {
    return await this.notion_client?.search({
      query,
    })
  }
}
