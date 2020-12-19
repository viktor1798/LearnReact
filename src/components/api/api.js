import * as axios from "axios"



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "e7c17a2e-5f6e-4e44-9c96-00ef2b1a2795"
    }
});



export const usersAPI = {
    getUsers(currentPage , pageSize )  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        })
    }
}


