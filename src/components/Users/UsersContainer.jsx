import { follow, setUser, unfollow, setCurrentPage, setTotalCountUser, toggleFethcing,toggleFollowingInProgress } from '../Redux/usersReduser';
import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import Preloader from '../common/Preloader/Preloader'
import {usersAPI} from '../api/api'





class UsersContainer extends React.Component {
    //происходит вмонтирование обектов в данную компоненту для обрисовки 
    componentDidMount() {
        this.props.toggleFethcing(true)
        debugger;
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
                this.props.toggleFethcing(false)
                this.props.setUser(data.items);
                this.props.setTotalCountUser(data.totalCount);
            })
    }

    onPageChenged = (numberPage) => {
        this.props.setCurrentPage(numberPage);
        this.props.toggleFethcing(true)
        usersAPI.getUsers(numberPage,this.props.pageSize).then(data => {
                this.props.toggleFethcing(false)
                this.props.setUser(data.items);
            })
    }

    render() {

        return <>
            {this.props.isLoadingPage ? <Preloader /> : null}
            <Users totalCountUser={this.props.totalCountUser}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChenged={this.onPageChenged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}





const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCountUser: state.usersPage.totalCountUser,
        currentPage: state.usersPage.currentPage,
        isLoadingPage: state.usersPage.isLoadingPage,
        followingInProgress:state.usersPage.followingInProgress,
    }

}
/* 
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUser: (users) => {
            dispatch(setUserAC(users))
        },
        setCurrentPage: (numberPage) => {
            dispatch(setCurrentPageAC(numberPage))
        },
        setTotalCountUser: (totalCount) => {
            dispatch(setTotalCountUserAC(totalCount))
        },
        toggleFethcing:(isLoadingPage)=>{
            dispatch(toggleFethcingAC(isLoadingPage))
        }
    }
}
 */



export default connect(mapStateToProps, { follow, unfollow, setUser, setCurrentPage, setTotalCountUser, toggleFethcing,toggleFollowingInProgress })(UsersContainer);