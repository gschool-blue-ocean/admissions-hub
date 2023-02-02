import axios from 'axios';

const axiosNodemailer = (address) => {
  axios
    .post('http://localhost:8888/send-email', { address: address })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default axiosNodemailer;
