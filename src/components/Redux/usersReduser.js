let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USER='SET_USER'

let initialState = {
    users: [
    //     { id: 1, followed: false, fullName: 'Kostya', status: 'pogoda top', location: { city: 'Minsk', country: 'Belarus' } },
    //     { id: 2, followed: true, fullName: 'Kirill', status: '+1', location: { city: 'Minsk', country: 'Belarus' } },
    //     { id: 3, followed: false, fullName: 'Alina', status: 'na samom dele pogoda tak sebe', location: { city: 'Minsk', country: 'Belarus' } },
    //     { id: 4, followed: true, fullName: 'Vanya', status: 'vozmoshno', location: { city: 'Minsk', country: 'Belarus' } }
 ]
}

//функция отправки сообщений 
const usersReduser = (state = initialState, action) => {


    switch (action.type) {
        case FOLLOW :
            return{
            ...state,
            users: state.users.map(u=> {
                if (u.id===action.userId){
                    return{...u,followed:true}
            }
            return u;
        })
        }
        case UNFOLLOW :
            return{
            ...state,
            users: state.users.map(u=> {
                if (u.id===action.userId){
                    return{...u,followed:false}
            }
            return u;
        })
         }
         case SET_USER:{
             return{...state,users:[...state.users,...action.users]}
            }
            
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW,userId});
export const setUserAC = (users) => ({ type: SET_USER,users});



export default usersReduser;


