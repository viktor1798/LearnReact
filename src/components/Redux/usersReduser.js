let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USER = 'SET_USER'
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
let SET_TOTAL_COUNT_USER = 'SET_TOTAL_COUNT_USER'
let TOGGLE_FETHCING = 'TOGGLE_FETHCING'
let TOGGLE_FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [
        //     { id: 1, followed: false, fullName: 'Kostya', status: 'pogoda top', location: { city: 'Minsk', country: 'Belarus' } },
        //     { id: 2, followed: true, fullName: 'Kirill', status: '+1', location: { city: 'Minsk', country: 'Belarus' } },
        //     { id: 3, followed: false, fullName: 'Alina', status: 'na samom dele pogoda tak sebe', location: { city: 'Minsk', country: 'Belarus' } },
        //     { id: 4, followed: true, fullName: 'Vanya', status: 'vozmoshno', location: { city: 'Minsk', country: 'Belarus' } }
    ],
    pageSize: 5,
    totalCountUser: 0,
    currentPage: 1,
    isLoadingPage: true,
    followingInProgress : []
}

//функция отправки сообщений 
const usersReduser = (state = initialState, action) => {


    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USER: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_COUNT_USER: {
            return { ...state, totalCountUser: action.totalCountUser }
        }
        case TOGGLE_FETHCING: {
            return { ...state, isLoadingPage: action.isLoadingPage }
        }
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return { ...state, followingInProgress: action.isLoadingPage? [...state.followingInProgress, action.userId]: state.followingInProgress.filter(id => id !=action.userId)}
        }
        default:
            return state;
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUser = (users) => ({ type: SET_USER, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalCountUser = (totalCountUser) => ({ type: SET_TOTAL_COUNT_USER, totalCountUser })
export const toggleFethcing = (isLoadingPage) => ({ type: TOGGLE_FETHCING, isLoadingPage })
export const toggleFollowingInProgress = (isLoadingPage, userId) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isLoadingPage, userId })


export default usersReduser;


