import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import UserInfo from './../userInfo/userInfo';
import './home.scss';

const Home = (props) =>  {
    if(props.user.login){
        return <UserInfo />;
    }
    else{
        return (
            <React.Fragment>
                <h1>Simple react-redux app</h1>
                <p>Please <Link to={"/login"}>Login</Link> to continue...</p>
                <p>OR if you don't have an account. Please <Link to={"/signup"}>Signup</Link> </p>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.login
    }
}

export default connect(mapStateToProps)(Home);