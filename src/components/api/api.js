import * as axios from "axios"



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "708a967f-7248-4c6b-9d8d-ee6120ddba98"
    }
});



export const usersAPI = {
    getUsers(currentPage , pageSize )  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        })
    },
    follow(userId){
       return instance.post(`follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        return instance.get(`profile/${userId}`)
    },
}
export const profileAPI={
   
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status:status})
    }
}
export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    }
} 


