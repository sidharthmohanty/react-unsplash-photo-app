import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID kFOkWVEqWBn2L-T_Z6mdPJpYRVXlJaevgwLv1oy8cWU",
  },
});
