import {followAC,setUserAC,unfollowAC} from '../Redux/usersReduser';
import Users from './Users'
import {connect} from 'react-redux'

const mapStateToProps=(state)=>{
 return{   
     users: state.usersPage.users
}

}

const mapDispatchToProps =(dispatch)=>{
    return{
        follow : (userId)=>{
            dispatch(followAC(userId));
        },
        unfollow : (userId)=>{
            dispatch(unfollowAC(userId));
        },
        setUser: (users)=>{
            dispatch(setUserAC(users))
        }
    }
}



const UsersContainer = connect (mapStateToProps,mapDispatchToProps)(Users)

export default UsersContainer;