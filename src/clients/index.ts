export abstract class ApplicationClient {
    protected _token: string;
    protected _client: unknown;

    constructor(token: string) {
        this._token = token;
        this._client = this.initialize_client()
    }

    protected initialize_client(): unknown {
        return undefined;
    }
}

