import axios from 'axios';
import {app_mc, app_sa} from './API';
import {endpointProact} from './EndPointsReference';
const controller = new AbortController();

/**
 * General API url and check point
 * @param url
 * @since 1.0.0
 * @package mpwr
 * @return {{baseURL: string,appMode:string}}
 */
function generalUrl(url) {
  let api_mc = app_mc; // UAT
  let appi_sa = app_sa; // UAT

  let baseURL_mc = api_mc + endpointProact.routes[url];
  let baseURL_sa = appi_sa + endpointProact.routes[url];

  return {
    baseURL_mc,
    baseURL_sa,
  };
}

/**
 *
 * @param {*} url
 * @param {*} data
 * @param {*} method
 * @returns {POST METHOD API CALL}
 */
const post = async (url, data) => {
  return new Promise(async (resolve, reject) => {
    const {baseURL_mc, baseURL_sa} = generalUrl(url);

    if (
      url === 'PatientLogin' ||
      url === 'PatientRegister' ||
      url === 'PatientForgotPassword' ||
      url === 'PatientOtp' ||
      url === 'PatientResetPassword' ||
      url === 'PatientProfileDetails' ||
      url === 'PatientResendPassword' ||
      url === 'getProfile' ||
      url === 'PatientMc' ||
      url === 'PatientNews' ||
      url === 'PatientDoctorList' ||
      url === 'logout'
    ) {
      await axios
        .post(baseURL_sa, data)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          resolve(error?.request?._response);
          return;
        });
    } else {
      await axios
        .post(baseURL_mc, data)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {

          resolve(error?.request?._response);
          return;
        });
    }
  });
};

/**
 * @param {*} url
 * @param {*} data
 * @param {*} method
 * @returns {POST METHOD API CALL}
 */
const put = async (url, data) => {
  return new Promise(async (resolve, reject) => {
    const {baseURL_mc} = generalUrl(url);

    await axios
      .put(baseURL_mc, data)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve(error?.request?._response);
        return;
      });
  });
};

/**
 * Get method
 * @param url
 * @param options
 * @return {Promise<R>}
 */
const get = (url, data) => {
  return new Promise((resolve, reject) => {
    const {baseURL_mc} = generalUrl(url);
    axios
      .get(baseURL_mc, {
        cancelToken: source.token,
        signal: controller.signal,
      })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
        return;
      });
  });
};

/**
 * Get method
 * @param url
 * @param options
 * @return {Promise<R>}
 */
const getQuery = (url, data) => {
  return new Promise((resolve, reject) => {
    const {baseURL_mc} = generalUrl(url);
    axios
      .get(baseURL_mc + '?' + querystringconvertor(data), {
        cancelToken: source.token,
        signal: controller.signal,
      })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
        return;
      });
  });
};



export default {
  post,
  put,
  get,
  getQuery,
};
