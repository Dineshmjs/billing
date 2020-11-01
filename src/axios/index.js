import Axios from 'axios';

// url = "http://localhost:2000/";
url = "https://house-keeing.herokuapp.com/"

export const http =  Axios.create({
    baseURL: url
})




