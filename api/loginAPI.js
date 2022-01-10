import axios from "axios"

export const loginApi = (param) => {
    return axios.get('https://jsonplaceholder.typicode.com/users');
}

export const logoutApi = (param) => {
    return null;
}