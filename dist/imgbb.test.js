"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const index_1 = __importDefault(require("./index"));
const axios_mock_adapter_1 = __importDefault(require("axios-mock-adapter"));
const vitest_1 = require("vitest");
const mock = new axios_mock_adapter_1.default(axios_1.default);
const key = "chave-secreta";
const imgbb = new index_1.default(key);
const responseData = {
    id: 'example',
    title: 'example',
    url_viewer: 'https://ibb.co/example',
    url: 'https://i.ibb.co/example/example.png',
    display_url: 'https://i.ibb.co/example/example.png',
    size: 260258,
    time: '1609336605',
    expiration: '0',
    image: {
        filename: 'example.png',
        name: 'example',
        mime: 'image/png',
        extension: 'png',
        url: 'https://i.ibb.co/example/example.png'
    },
    thumb: {
        filename: 'example.png',
        name: 'example',
        mime: 'image/png',
        extension: 'png',
        url: 'https://i.ibb.co/example/example.png'
    },
    medium: {
        filename: 'example.png',
        name: 'example',
        mime: 'image/png',
        extension: 'png',
        url: 'https://i.ibb.co/example/example.png'
    },
    delete_url: 'https://ibb.co/example/example'
};
(0, vitest_1.test)("should create a correct URL without expiration", () => {
    const url = imgbb.createUrl();
    (0, vitest_1.expect)(url).toBe(`https://api.imgbb.com/1/upload?key=${key}`);
});
(0, vitest_1.test)("should create a correct URL with expiration", () => {
    const url = imgbb.createUrl(3000);
    (0, vitest_1.expect)(url).toBe(`https://api.imgbb.com/1/upload?expiration=3000&?key=${key}`);
});
(0, vitest_1.test)("Should file be defined", async () => {
    const file = new File(["example"], "example.png", { type: 'image/png' });
    (0, vitest_1.expect)(file).toBeDefined();
});
(0, vitest_1.test)("Should response data", async () => {
    const file = new File(["example"], "example.png", { type: 'image/png' });
    (0, vitest_1.describe)("file need be defined", () => {
        (0, vitest_1.expect)(file).toBeDefined();
    });
    mock.onPost(`https://api.imgbb.com/1/upload?key=${key}`).reply(200, responseData);
    const result = await imgbb.upload(file);
    (0, vitest_1.expect)(result).toEqual(responseData);
});
