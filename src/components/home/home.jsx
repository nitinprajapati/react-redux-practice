import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './home.scss';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    content(){
        if(this.props.user.login){
            const {profileObj} = this.props.user.login_user_orofile;
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
        }
        else{
            return (
                <React.Fragment>
                    <h1>Simple react-redux app</h1>
                    <p>Please <Link to={"/login"}>Login</Link> or <Link to={"/signup"}>Signup</Link> to continue...</p>
                </React.Fragment>
            )
        }
    }

    render() {
        return (
           <div className="home">
               {this.content()}
           </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.login
    }
}

export default connect(mapStateToProps)(Home);