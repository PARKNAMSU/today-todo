import axios from 'axios';

const ENDPOINT = process.env.REACT_APP_SERVER_URL;
axios.defaults.withCredentials = true;

const api = axios.create({
    baseURL: `${ENDPOINT}/user`,
    params: {},
});

export const userApi = {
    login: ({ email, password }) => {
        return api.post('/get/' + email, { password });
    },
    getUser: ({ accessToken }) => {
        return api.get('/get', {
            auth: accessToken,
        });
    },
    logout: () => {
        return api.get('/logout');
    },
};
