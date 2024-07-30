
import axios from "axios";
import IMGBB from "./index";
import MockAdapter from "axios-mock-adapter";
import {expect, test, describe} from "vitest"
import { responseData as data } from "./constant";

const mock = new MockAdapter(axios);
const key = "chave-secreta";
const imgbb = new IMGBB(key);


test("Should file be defined", async()=>{
    const file = new File(["example"], "example.png", {type: 'image/png'});
    expect(file).toBeDefined();
})

test("Should response data", async()=>{
  const file = new File(["example"], "example.png", {type: 'image/png'});

  describe("file need be defined", ()=>{
    expect(file).toBeDefined();
  });

  mock.onPost(`https://api.imgbb.com/1/upload?key=${key}`).reply(201, {status: 201, response:data});
  const result = await imgbb.upload(file);
  expect(result).toEqual({
    status: 201,
    data:{
      response:data,
      status: 201
    }
  });
})