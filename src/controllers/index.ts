export abstract class Controller {
    protected _token: string;

    constructor(token: string) {
        this._token = token
    }

    initialize_client(): unknown {
        return undefined;
    }
}