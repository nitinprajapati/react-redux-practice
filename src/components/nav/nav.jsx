import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './nav.scss';
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import {Logout} from './../../actions/loginActions';



class Navigation extends Component {
    loginClass(){
        return this.props.user.login ? '' : 'hidden';
    }

    logoutClass(){
        return this.props.user.login ? 'hidden' : '';
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
                        <LinkContainer to="/posts" className={this.loginClass()}>
                            <NavItem>Posts</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/addPost" className={this.loginClass()}>
                            <NavItem>Addpost</NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                         <LinkContainer to="/login" className={this.logoutClass()}>
                        <NavItem>Login</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/signup" className={this.logoutClass()}>
                        <NavItem>SignUp</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/logout" className={this.loginClass()}>
                        <NavItem onClick={this.props.Logout}>logout</NavItem>
                    </LinkContainer>
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

export default connect(mapStateToProps, mapDispatchToProps, null,{
  pure: false
})(Navigation);