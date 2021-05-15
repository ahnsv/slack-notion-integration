import { NotionClient } from "../notion"

describe("Notion Client는", () => {
    
    const notion_client = new NotionClient();
    
    it("initialize를 정상적으로 해야합니다", () => {
        expect(notion_client.client).toBeTruthy()
    })

    it("Search Query가 없을 때 기본 페이지들을 로드해야 합니다", async () => {
        const res = await notion_client.search("")
        expect(res?.results.length).toBeGreaterThan(0);
        console.log(res?.results);
    })

    it("1개 이상의 Database를 로드합니다", async () => {
        const res = await notion_client.client.databases.list({})
        expect(res.results.length).toBeGreaterThanOrEqual(1)
    })
})
// search pages
// list pages
// write to page