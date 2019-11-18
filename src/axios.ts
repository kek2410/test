import axios from "axios";

// axios.defaults.baseURL = "https://reqres.in";

const customAxios = async (
  url: string,
  params?: any,
  method?: string
): Promise<any> => {
  let result: any = null;

  if (params === undefined || params === {}) params = null;
  if (Object.keys(params).length === 0) params = null;

  if (method === undefined || method === null || method === "") method = "get";

  console.log(params);

  try {
    let config: any = null;

    config = {
      method: method,
      url: url,
      data: params
    };

    await axios(config)
      .then(function(response): void {
        //handel success
        console.log("axios result data: ");
        console.log(response.data.data.movies);
        result = response.data.data.movies;
      })
      .catch(function(error): void {
        // handll error
        console.log(error);
        // movieList = null;
        result = null;
      })
      .finally(function(): void {
        // always executed
        console.log("finish");
      });
  } catch (error) {
    console.error("catch Error:", error);
  }
  return result;
};

export default customAxios;
