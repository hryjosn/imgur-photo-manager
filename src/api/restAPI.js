import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
console.log("API_URL>", API_URL);
export const formPost = async (
  endPoint,
  data,
  debug = false,
  timeout = 6000
) => {
  console.log("form", data);
  return axios({
    method: "POST",
    endPoint: API_URL + endPoint,
    data, // Data

    headers: {
      //   Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
      Authorization: `Bearer 41bfdfb2dd8b17869ee3a7ae34f0403baa49e349`,
    },
    mimeType: "multipart/form-data",
  })
    .then((response) => {
      // const hasToken = !!response.headers.authorization;
      // if (hasToken && process.browser) {
      //     // console.log('have token')
      //     // console.log(response.headers.authorization)
      //     refreshToken(response.headers.authorization);
      // }
      if (response && debug) {
        console.log(`------------------res:${endPoint}------------------`);
        console.log(response.data);
      }
      if (response.status !== 200) {
        alert(response.data.msg);
      }
      return response;
    })
    .catch((e) => {
      catchError(e);
      throw e;
    });
};
export const post = async (endPoint, data, debug = false, timeout = 6000) => {
  const token = localStorage.getItem("token");
  return axios({
    method: "POST",
    endPoint: API_URL + endPoint,
    data: data, // post Data
    timeout: timeout, // timeout
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Accept: "application/json;",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      // const hasToken = !!response.headers.authorization;
      // if (hasToken && process.browser) {
      //     // console.log('have token')
      //     // console.log(response.headers.authorization)
      //     refreshToken(response.headers.authorization);
      // }
      if (response && debug) {
        console.log(`------------------res:${endPoint}------------------`);
        console.log(response.data);
      }
      if (response.status !== 200) {
        alert(response.data.msg);
      }
      return response;
    })
    .catch((e) => {
      catchError(e);

      throw e;
    });
};
export const get = async (endPoint, params, debug = false, timeout = 6000) => {
  return axios
    .get(API_URL + endPoint, {
      params,
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
      },
    })
    .then((response) => {
      if (response && debug) {
        console.log(`------------------res:${endPoint}------------------`);
        console.log(response.data);
      }
      if (response.status !== 200) {
        return response;
      }
      return response.data;
    })
    .catch((e) => {
      catchError(e);
      throw e;
    });
};
const catchError = (e) => {
  if (e?.response?.data?.message) {
    alert(e.response.data.message);
  }
  if (e?.response?.status === 401) {
    const localStorageKeys = Object.keys(localStorage);
    if (localStorageKeys.length > 0) {
      localStorage.clear();
    }
  }
};
export const put = async (endPoint, data, debug = false, timeout = 6000) => {
  const token = localStorage.getItem("token");

  return axios({
    method: "PUT",
    endPoint: API_URL + endPoint,
    data: data, // put Data
    timeout: timeout, // timeout
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Accept: "application/json;",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response && debug) {
        console.log(`------------------res:${endPoint}------------------`);
      }
      if (response.status !== 200) {
        return response;
      }
      return response;
    })
    .catch((e) => {
      catchError(e);
      throw e;
    });
};
