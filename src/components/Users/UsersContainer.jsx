import { follow, setUser, unfollow, setCurrentPage, setTotalCountUser, toggleFethcing } from '../Redux/usersReduser';
import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import * as axsios from 'axios'
import Preloader from '../common/Preloader/Preloader'




class UsersContainer extends React.Component {
    //происходит вмонтирование обектов в данную компоненту для обрисовки 
    componentDidMount() {
        this.props.toggleFethcing(true)
        axsios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleFethcing(false)
                this.props.setUser(response.data.items);
                this.props.setTotalCountUser(response.data.totalCount);
            })
    }

    onPageChenged = (numberPage) => {
        this.props.setCurrentPage(numberPage);
        this.props.toggleFethcing(true)
        axsios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleFethcing(false)
                this.props.setUser(response.data.items);
            })
    }

    render(){
        
        return <>
        {this.props.isLoadingPage ? <Preloader/>:null}
        <Users totalCountUser={this.props.totalCountUser}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        onPageChenged ={this.onPageChenged}
        follow = {this.props.follow}
        unfollow = {this.props.unfollow}
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
        isLoadingPage: state.usersPage.isLoadingPage
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



export default  connect(mapStateToProps, 
    {
        follow,
        unfollow,
        setUser,
        setCurrentPage,
        setTotalCountUser,
        toggleFethcing
    })(UsersContainer);