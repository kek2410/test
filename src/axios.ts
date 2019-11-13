import axios from "axios";

// axios.defaults.baseURL = "https://reqres.in";

const customAxios = async (url: string, params?: any) => {
  let result: any = null;

  if (typeof params !== undefined) params = null;

  if (params !== null) {
    await axios
      .post(url, { params: params })
      .then(response => {
        //handel success
        console.log("axios result data: ");
        console.log(response.data.data.movies);
        result = response.data.data.movies;
      })
      .catch(err => {
        // handll error
        console.log("err: ");
        console.log(err);
        // movieList = null;
        result = null;
      })
      .then(() => {
        // always executed
        console.log("finish");
      });
  } else {
    await axios
      .post(url)
      .then(response => {
        //handel success
        console.log("axios result data: ");
        console.log(response.data.data.movies);
        result = response.data.data.movies;
      })
      .catch(err => {
        // handll error
        console.log("err: ");
        console.log(err);
        // movieList = null;
        result = null;
      })
      .then(() => {
        // always executed
        console.log("finish");
      });
  }

  return result;
};

export default customAxios;
