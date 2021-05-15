export abstract class ApplicationClient {
    protected _token: string;

    constructor(token: string) {
        this._token = token
    }

    initialize_client(): unknown {
        return undefined;
    }
}
