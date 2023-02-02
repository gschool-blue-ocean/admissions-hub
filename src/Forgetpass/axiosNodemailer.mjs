import axios from "axios";

const axiosNodemailer = async () => {
  axios
    .post("http://localhost:8888/send-email", {
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default axiosNodemailer;