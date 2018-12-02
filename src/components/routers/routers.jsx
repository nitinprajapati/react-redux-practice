import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import AddPosts from './../addPosts/addPosts';
import Posts from './../posts/posts';
import Home  from './../home/home';
import SignUpForm from '../signup/signUp';
import LoginForm from '../signin/signIn';


class Routers extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="container body-content">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/addPost' component={AddPosts} />
                    <Route path='/posts' component={Posts} />
                    <Route path='/login' component={LoginForm} />
                    <Route path='/signup' component={SignUpForm} />
                    <Redirect from='/logout' to='/'/>
                </Switch>
            </div>
        );
    }
}

export default Routers;