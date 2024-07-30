import * as T from "./types";
export default class IMGBB {
    private key;
    private base;
    constructor(key: string);
    private createUrl;
    upload(file: File, expiration?: number): Promise<T.SucessResponse | T.ErrorResponse>;
}
