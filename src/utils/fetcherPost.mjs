import axios from "axios";

const fetcherPost = (url, payload) =>
  axios.post(url, payload).then((res) => res.data);

export default fetcherPost;
