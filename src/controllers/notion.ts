import { Client, APIErrorCode } from "@notionhq/client";
import { Controller } from ".";
import { ClientInitializationError, IntegrationEnvironmentError } from "../common/exceptions";

export class NotionController extends Controller {
  public constructor() {
    const notionToken = process.env.NOTION_TOKEN;
    if (!notionToken) {
      throw new IntegrationEnvironmentError("NOTION_TOKEN을 찾을 수 없습니다");
    }
    super(notionToken);
  }

  public initialize_client(): Client | undefined {
    try {
      return new Client({
        auth: this._token,
      });
    } catch (error) {
        if (error.code === APIErrorCode.Unauthorized) {
            throw new ClientInitializationError("Notion Client를 만드는데 실패했습니다")
        }
    }
  }
}
