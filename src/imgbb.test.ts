
import axios from "axios";
import IMGBB from "./index";
import MockAdapter from "axios-mock-adapter";
import { ImageUploadProps } from './types';
import {expect, test, describe} from "vitest"
const mock = new MockAdapter(axios);
const key = "chave-secreta";
const imgbb = new IMGBB(key);

const responseData: ImageUploadProps = {
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

test("should create a correct URL without expiration",  () =>{
    const url = imgbb.createUrl();
    expect(url).toBe(`https://api.imgbb.com/1/upload?key=${key}`)
})

test("should create a correct URL with expiration",  () =>{
    const url = imgbb.createUrl(3000);
    expect(url).toBe(`https://api.imgbb.com/1/upload?expiration=3000&?key=${key}`)
})


test("Should file be defined", async()=>{
    const file = new File(["example"], "example.png", {type: 'image/png'});
    expect(file).toBeDefined();
})

test("Should response data", async()=>{
  const file = new File(["example"], "example.png", {type: 'image/png'});

  describe("file need be defined", ()=>{
    expect(file).toBeDefined();
  })
  mock.onPost(`https://api.imgbb.com/1/upload?key=${key}`).reply(200, responseData);
  const result = await imgbb.upload(file);
  expect(result).toEqual(responseData);
})