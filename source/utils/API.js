import { base_sa, base_mc, video_sdk_token, VideoSdk_BaseUrl } from './URls';

export const app_sa = base_sa;
export const app_mc = base_mc;
export const token = video_sdk_token;

// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(VideoSdk_BaseUrl, {
    method: 'POST',
    headers: {
      authorization: `${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
  });

  const { roomId } = await res.json();
  return roomId;
};
