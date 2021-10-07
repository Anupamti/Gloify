import axios from 'axios';

const API = axios.create({ baseURL: 'https://devza.com/tests/tasks/' })

API.interceptors.request.use((req) => {
    req.headers.AuthToken = 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a';
    return req;
});

export const createTask = (formData) => API.post('create', formData)
export const getTaskData = () => API.get('list')
export const getUserData = (formData) => API.get('listusers', formData)
export const deleteTask = (form) => API.post('delete', form)
export const updateTask = (formData) => API.post('update', formData)

// export const signIn = (formData) => API.post('user/signin', formData)
// export const signUp = (formData) => API.post('user/signup', formData)
