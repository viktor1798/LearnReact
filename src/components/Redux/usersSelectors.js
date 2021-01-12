import {createSelector} from 'reselect'

export const getUsersSelector = (state) =>{
    return state.usersPage.users;
}

export const getUsers = createSelector(getUsersSelector, (users)=>{
    return users.filter(u=> true)
})

export const getPageSize = (state) =>{
    return state.usersPage.pageSize;
}

export const getTotalCountUser = (state) =>{
    return state.usersPage.totalCountUser;
}

export const getCurrentPage = (state) =>{
    return state.usersPage.currentPage;
}

export const getIsLoadingPage = (state) =>{
    return state.usersPage.isLoadingPage;
}

export const getFollowingInProgress = (state) =>{
    return state.usersPage.followingInProgress;
}