import axios from "axios";

const fetcher = {
  get: function(url) {
    return axios.get(url).then((res) => res.data);
  },
  post: function(url, payload) {
    return axios.post(url, payload).then((res) => res.data);
  },
  postMultipart: function(url, payload) {
    return axios
      .post(url, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data);
  },
  put: function(url, payload) {
    return axios.put(url, payload).then((res) => res.data);
  },
  putMultipart: function(url, payload) {
    return axios
      .put(url, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data);
  },
  delete: function(url) {
    return axios.delete(url).then((res) => res.data);
  },
};

export default fetcher;
