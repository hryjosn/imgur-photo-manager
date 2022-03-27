import { formPost, get } from "./restAPI";
// import axios from "axios";

// const request = axios.create({
//   baseURL: process.env.API_URL,
// });
/** -------------------------- Imgur -------------------------- */

/**
 * 上傳圖片 [POST]
 */
export const callUploadPhoto = (data) => formPost("/image", data);
/**
 * 取得相簿資訊 [GET]
 */
export const callGetAlbum = (albumHash) => get(`/album/${albumHash}`);
