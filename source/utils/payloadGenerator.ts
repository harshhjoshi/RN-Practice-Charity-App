import JSEncrypt from 'jsencrypt';
import {decrypt} from './cryptoAES';

export const requestGenerator = (payload: any) => {
  // const { encryptionKey } = store.getState().login
  let plainReqObj = {
    RequestId: `u_id${Date.now()}`,
    AppId: `WEB`,
    SessionId: 'sk',
    UserId: 'loggedInUser',
    IsEncrypt: true,
    RequestData: payload,
  };

  let enc = new JSEncrypt(); // RSA
  const k = `MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1pwwWbKiwVd2L+Q6TGAe
  41qZYv+oaaHWMYuP1oZc+iSXX5zwHUvnN9AqGWKvZJVwpDSJ1LRcX5HAT//1X6HX
  439VJGtmm2gPdN5prIq8gReVemaQo4fIXILEahg4qyeQ4jhO74bl8aeZ3JBsgkVE
  0g5B9btWWYUym2/a74h6y5/DNIiKqYZTF7M5MDrsZg4gCRUCLTd8VIZfTdAp8zmq
  zP6EOY2oUd0zuFgrjO6sGYtZLiI/AUkQymn9KTNhzWngvvFWak1JFOqgQUGgpMnw
  TjKgSjNX15NzkF8zoesj+2scSPOS/GpM7eIHGD2uaL3e45AHBu+5vUJqge5yEfkp
  QwIDAQAB`;
  enc.setPublicKey(k);
  // let finalPayload = {
  //   payloadData: encrypt(plainReqObj, encryptionKey), // encryption of Plain Request Body should be pass here
  //   sessionId: enc.encrypt(encryptionKey), // encrypted SK or DK
  //   AppChannelId: 1, // 1 = WebApp & 2 = MobileApp
  // };

  // // finalPayload will goes into

  // return finalPayload;
};

export const responseGenerator = (response: any) => {
  const {encryptionKey} = store.getState().login;
  response.dk = decrypt(response.dk, encryptionKey);
  response.payloadResponse = decrypt(response.payloadResponse, response.dk);
  return response;
};
