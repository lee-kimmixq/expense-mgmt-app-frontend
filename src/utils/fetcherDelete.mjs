import axios from "axios";

const fetcherDelete = (url) => axios.delete(url).then((res) => res.data);

export default fetcherDelete;
