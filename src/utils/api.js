import axios from "axios";

axios.defaults.baseURL = "https://api.github.com";

export const urls = {
  get: {
    REPOS: "search/",
  },
};
const { CancelToken } = axios;

let newCancelToken;
export const getMethod = (url) => {
  if (typeof newCancelToken !== typeof undefined) {
    newCancelToken.cancel();
  }
  newCancelToken = CancelToken.source();
  return axios.get(url, { cancelToken: newCancelToken.token });
};
