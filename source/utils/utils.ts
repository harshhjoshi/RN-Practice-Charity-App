import {IAPIResponse} from '../interfaces/apiInterface';

export const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    let r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const handleRefClick = (ref: any) => {
  if (ref.current) {
    ref.current.click();
  }
};

export const getAPIResponse = (response: IAPIResponse): IAPIResponse => {
  const {dk, payloadResponse, rc} = response;
  return {dk, payloadResponse, rc};
};

export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    let r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
