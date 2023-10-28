// api/user.js
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getAllUsers = () => {
    return axios.get(`${API_URL}/users`);
};

// export const getUserById = (userId) => {
//     return axios.get(`${API_URL}/users/${userId}`);
// };

export const getHomeContent = () => {
    return axios.get(`${API_URL}/portofolio/home/`);
}

export const getSettings = () => {
    return axios.get(`${API_URL}/setting/allsettings`);
}
const url = process.env.NEXT_PUBLIC_API_TRIAL
export const getTrial = () => {
    return axios.get(`${url}/products`);
}



