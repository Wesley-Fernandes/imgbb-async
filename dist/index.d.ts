export default class IMGBB {
    key: string;
    private base;
    constructor(key: string);
    createUrl(expiration?: number): string;
    upload(file: File, expiration?: number): Promise<unknown>;
}
