import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileUser } from '../Redux/profileReduser'
import { Redirect, withRouter } from 'react-router-dom';


class ProfileConteiner extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 12783;
        }
        this.props.getProfileUser(userId);
       
    }


    render() {
        if (!this.props.isAuth) return <Redirect to='/login'/>
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }


}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})
debugger
let WithDataContainerComponent = withRouter(ProfileConteiner);



export default connect(mapStateToProps, { getProfileUser })(WithDataContainerComponent);