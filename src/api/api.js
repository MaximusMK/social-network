import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "3744fa7c-b6f7-4f81-b99d-ddd3215a400d"
    }
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
}

export const profileAPI = {
    getProfile(userId = 1) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    }
}

export const headerAPI = {
    getHeader() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    }
}