import React from 'react';
import {connect} from 'react-redux';

const UserInfo = (props) => {
    const {profileObj} = props.user.details;
    return (
        <React.Fragment>
            <h1>Welcome: {profileObj.name}</h1>
            <div className="user-info display-inline-block">
                <p className="display-inline-block">
                    <img src={profileObj.imageUrl} alt="User icon" className="img-thumbnail user-img" />
                </p>
                <p className="display-inline-block user-details">
                    EmailID: {profileObj.email}
                </p>
            </div>
        </React.Fragment>
    )
};

const mapStateToProps = (state) => {
    return {
        user: state.login
    }
}

export default connect(mapStateToProps)(UserInfo);