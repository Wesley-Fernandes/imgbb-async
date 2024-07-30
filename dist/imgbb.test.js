"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const index_1 = __importDefault(require("./index"));
const axios_mock_adapter_1 = __importDefault(require("axios-mock-adapter"));
const vitest_1 = require("vitest");
const constant_1 = require("./constant");
const mock = new axios_mock_adapter_1.default(axios_1.default);
const key = "chave-secreta";
const imgbb = new index_1.default(key);
(0, vitest_1.test)("Should file be defined", async () => {
    const file = new File(["example"], "example.png", { type: 'image/png' });
    (0, vitest_1.expect)(file).toBeDefined();
});
(0, vitest_1.test)("Should response data", async () => {
    const file = new File(["example"], "example.png", { type: 'image/png' });
    (0, vitest_1.describe)("file need be defined", () => {
        (0, vitest_1.expect)(file).toBeDefined();
    });
    mock.onPost(`https://api.imgbb.com/1/upload?key=${key}`).reply(201, { status: 201, response: constant_1.responseData });
    const result = await imgbb.upload(file);
    (0, vitest_1.expect)(result).toEqual({
        status: 201,
        data: {
            response: constant_1.responseData,
            status: 201
        }
    });
});
