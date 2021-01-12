import { follow, unfollow, setCurrentPage,getUsersThunkCreator,toggleFollowingInProgress } from '../Redux/usersReduser';
import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import Preloader from '../common/Preloader/Preloader'
import withAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsLoadingPage, getPageSize, getTotalCountUser, getUsers } from '../Redux/usersSelectors';






class UsersContainer extends React.Component {
    //происходит вмонтирование обектов в данную компоненту для обрисовки 
    componentDidMount() {
       /*  this.props.toggleFethcing(true)
        
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
                this.props.toggleFethcing(false)
                this.props.setUser(data.items);
                this.props.setTotalCountUser(data.totalCount);
            }) */
        this.props.requestUsers(this.props.currentPage,this.props.pageSize);
    }

    onPageChenged = (numberPage) => {

        this.props.requestUsers(numberPage,this.props.pageSize)
        /* 
        this.props.setCurrentPage(numberPage);
        this.props.toggleFethcing(true)
        usersAPI.getUsers(numberPage,this.props.pageSize).then(data => {
                this.props.toggleFethcing(false)
                this.props.setUser(data.items);
            }) */
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
                toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}





const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCountUser: getTotalCountUser(state),
        currentPage: getCurrentPage(state),
        isLoadingPage: getIsLoadingPage(state),
        followingInProgress: getFollowingInProgress(state),
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





export default compose(
    withAuthRedirect,
    connect(mapStateToProps,{follow, unfollow, setCurrentPage, toggleFollowingInProgress, requestUsers :getUsersThunkCreator })
)(UsersContainer)