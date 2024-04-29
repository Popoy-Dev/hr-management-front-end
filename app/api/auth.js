import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/",
    withCredentials: true,
});
const auth = {

    login: async (data) => await axiosInstance.post('/api/v1/auth/login', data)

}

export default auth