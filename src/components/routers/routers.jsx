import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import AddPosts from './../addPosts/addPosts';
import Posts from './../posts/posts';
import Home  from './../home/home';
import SignUpForm from '../signup/signUp';
import LoginForm from '../signin/signIn';
import { connect } from "react-redux";

const authorized = (loggedIn=false, Route) =>{
    return loggedIn ? Route : <Redirect to={"/login"} />
}

const Routers = (props) => {
    return (
        <div className="container body-content">
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={LoginForm} />
                <Route path='/signup' component={SignUpForm} />
                <Redirect from='/logout' to='/'/>

                <Route path='/addPost' render={
                    () => {
                        return authorized(props.user.login, <AddPosts />);
                    }
                } />
                
                <Route path='/posts' render={
                    () => {
                        return authorized(props.user.login, <Posts />);
                    }
                } />
            </Switch>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.login
    }
}

export default connect(mapStateToProps, null, null, {
  pure: false
})(Routers);