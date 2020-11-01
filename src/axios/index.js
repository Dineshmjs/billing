import Axios from 'axios';

//const url = "http://localhost:2000/";
const url = "https://house-keeing.herokuapp.com/"

export const http =  Axios.create({
    baseURL: url
})




