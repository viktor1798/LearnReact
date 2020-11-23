import {followAC,setUserAC,unfollowAC,setCurrentPageAC,setTotalCountUserAC} from '../Redux/usersReduser';
import Users from './Users'
import {connect} from 'react-redux'

const mapStateToProps=(state)=>{
 return{   
     users: state.usersPage.users,
     pageSize: state.usersPage.pageSize,
     totalCountUser : state.usersPage.totalCountUser,
     currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage : (numberPage)=>{
            dispatch(setCurrentPageAC(numberPage))
        },
        setTotalCountUser : (totalCount)=>{
            dispatch(setTotalCountUserAC(totalCount))
        }
    }
}



const UsersContainer = connect (mapStateToProps,mapDispatchToProps)(Users)

export default UsersContainer;