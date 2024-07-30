"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class IMGBB {
    constructor(key) {
        this.base = "https://api.imgbb.com/1/upload";
        this.key = key;
    }
    createUrl(expiration) {
        return expiration ? `${this.base}?expiration=${expiration}&?key=${this.key}` : `${this.base}?key=${this.key}`;
    }
    async upload(file, expiration) {
        if (!(file instanceof File)) {
            return { status: 401, response: 'Invalid file. Please, use file from input type file.' };
        }
        try {
            const url = this.createUrl(expiration);
            const archive = new FormData();
            archive.append('image', file);
            const { data } = await axios_1.default.post(url, archive, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return { status: 201, response: data };
        }
        catch (error) {
            console.error(error);
            return { status: 500, response: "Failed to upload. Internal error." };
        }
    }
}
exports.default = IMGBB;
