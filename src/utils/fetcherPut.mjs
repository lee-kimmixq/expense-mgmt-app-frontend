import axios from "axios";

const fetcherPut = (url, payload) =>
  axios.put(url, payload).then((res) => res.data);

export default fetcherPut;
