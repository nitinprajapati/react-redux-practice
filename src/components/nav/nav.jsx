import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './nav.scss';
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import {Logout} from './../../actions/loginActions';



class Navigation extends Component {

    logout (){
        if(this.props.user.login){
            return (
                <LinkContainer to="/logout">
                    <NavItem onClick={this.props.Logout}>logout</NavItem>
                </LinkContainer>
            )
        }
        else{
            return(
                <React.Fragment>
                    <LinkContainer to="/login">
                        <NavItem>Login</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/signup">
                        <NavItem>SignUp</NavItem>
                    </LinkContainer>
                </React.Fragment>
            )
        }
    }

    addPost(){
        if(this.props.user.login){
            return (
                <LinkContainer to="/addPost">
                    <NavItem>Addpost</NavItem>
                </LinkContainer>
            )
        }
    }

    post(){
        if(this.props.user.login){
            return (
                <LinkContainer to="/posts">
                    <NavItem>Posts</NavItem>
                </LinkContainer>
            )
        }
    }

    render() {
        return (
            <Navbar default fixedTop fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#bb">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer exact to="/">
                            <NavItem>Home</NavItem>
                        </LinkContainer>
                        {this.addPost()}
                        {this.post()}
                    </Nav>
                    <Nav pullRight>
                        {this.logout()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.login
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        Logout: Logout
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);