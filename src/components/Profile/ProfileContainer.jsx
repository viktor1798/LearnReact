import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileUser,getStatus, updateStatus } from '../Redux/profileReduser'
import { Redirect, withRouter } from 'react-router-dom';
import withAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileConteiner extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 12783;
        }
        this.props.getProfileUser(userId);
        this.props.getStatus(userId);
    

    }


    render() {
    
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}  />
        )
    }


}

//let AuthRedirectComponent = withAuthRedirect(ProfileConteiner)

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

/* let WithDataContainerComponent = withRouter(AuthRedirectComponent);



export default connect(mapStateToProps, { getProfileUser })(WithDataContainerComponent); */

export default compose(
    connect(mapStateToProps, { getProfileUser, getStatus,updateStatus }),
    withRouter,
    //withAuthRedirect
)(ProfileConteiner);