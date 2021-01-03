import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileUser } from '../Redux/profileReduser'
import { withRouter } from 'react-router-dom';


class ProfileConteiner extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 12783;
        }
        this.props.getProfileUser(userId);
       
    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }


}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
debugger
let WithDataContainerComponent = withRouter(ProfileConteiner);



export default connect(mapStateToProps, { getProfileUser })(WithDataContainerComponent);