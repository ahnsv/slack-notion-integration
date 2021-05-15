import { Client } from "@notionhq/client";

const NOTION_TOKEN = process.env.NOTION_TOKEN;

const notion = new Client({
  auth: NOTION_TOKEN,
});

(async () => {
  const listUsersResponse = await notion.users.list({});
  console.log(listUsersResponse);
})();
