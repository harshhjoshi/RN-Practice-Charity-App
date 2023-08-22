import { api_flavour } from './API_Flavours';

//Hard Coded Url, Change if you nedded and required by backend Team.
const sa = 'https://sa-api-';
const mc = 'https://mc-api-';
const socketUrl = "wss://mc-api-";
const EndPoint = '.proactunited.com/api/v1/';
const SocketEndPoint = '.proactunited.com';
const videoSDK_token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIzYzQ2ODdkMy1kYWQ5LTRhMTItYWQ0YS04MWU5NjQxZWNhOTQiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY4MTI3NzkzMSwiZXhwIjoxODM5MDY1OTMxfQ.sNXe5dVEjWZ2qCyj8ekeCG7JxKCuDdbC641Hkbhrx-U';
const videSdk_BaseUrl = 'https://api.videosdk.live/v2/rooms';
//All Dynamic Base Urls, Don't Change without neccesory
const socketBaseUrl = `${socketUrl}${api_flavour}${SocketEndPoint}`;
export const base_sa = `${sa}${api_flavour}${EndPoint}`;
export const base_mc = `${mc}${api_flavour}${EndPoint}`;
export const video_sdk_token = videoSDK_token;
export const VideoSdk_BaseUrl = videSdk_BaseUrl;
export const Socket_BaseUrl = socketBaseUrl;