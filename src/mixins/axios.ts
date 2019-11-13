import axios from "axios";
import Component from "vue-class-component";
import { Vue } from "vue-property-decorator";

// axios.defaults.baseURL = "https://reqres.in";

@Component
export default class Axios extends Vue {
  result: any = null;

  // axios.defaults.headers.common["Authorization"] = "testcode";
  // axios.defaults.headers.post["Content-Type"] = "application/json; charset=utf-8";

  async _axios(url: string, params: any) {
    if (typeof params !== undefined) params = null;
    if (params !== null) {
      await axios
        .post(url, { params: params })
        .then(response => {
          //handel success
          console.log("axios result data: ");
          console.log(response.data.data.movies);
          this.result = response.data.data.movies;
        })
        .catch(err => {
          // handll error
          console.log("err: ");
          console.log(err);
          // movieList = null;
          this.result = null;
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
          this.result = response.data.data.movies;
        })
        .catch(err => {
          // handll error
          console.log("err: ");
          console.log(err);
          // movieList = null;
          this.result = null;
        })
        .then(() => {
          // always executed
          console.log("finish");
        });
    }

    return this.result;
  }
}
