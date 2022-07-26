import axios from "axios";

// const apiClient = axios.create({
//   baseURL: "http://sandbox.pavelon.com",
//   withCredentials: true,
//   headers: {
//     Accept: "",
//     "Content-type": "",
//   },
// });

// export default {
//   postLogin() {
//     return apiClient.post("login");
//   },
//   getUsers() {
//     return apiClient.get("users");
//   },
//   postUsers() {
//     return apiClient.post("users");
//   },
// };

axios.defaults.baseURL = "http://sandbox.pavelon.com/api/";
let refresh = false;

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401 && !refresh) {
      refresh = true;
      // eslint-disable-next-line no-unused-vars
      const { status, data } = await axios.post(
        "refresh",
        {},
        {
          withCredentials: true,
        }
      );
      if (status === 200) {
        axios.defaults.headers.common["Authorization"] = "Bearer ${data.token)";
        return axios(error.config);
      }
    }
    refresh = false;
    return error;
  }
);
