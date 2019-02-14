import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
import {FieldGroup} from './../formGroup/formGroup';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {LoggedIn, manualLogin} from './../../actions/loginActions';
import Spinner from "./../loader/spinner";
import './signIn.scss';
 
class LoginForm extends Component {
    
    componentDidMount(){
        this.submit = this.submit.bind(this.props);
    }

    responseFacebook = (response) => {
        console.log(JSON.stringify(response));
        response.vender = "fb";
        this.props.loggedin(response);
    }

    submit(e){
        let payload = {
            userName: e.target.previousElementSibling.previousElementSibling.lastElementChild.value,
            password: e.target.previousElementSibling.lastElementChild.value
        }
        this.manualLogin(payload);
    }


    error(){
        if(this.props.loginStatus.error){
            return (
                <div>Service is down. Please try again...</div>
            )
        }
    }

    
    render() {
        return (
            <React.Fragment>
                 <Spinner 
                    status={this.props.loginStatus.fetching}
                    message={this.props.loginStatus.message} 
                    loaderType={this.props.loginStatus.loaderType}
                    color={this.props.loginStatus.color}
                   
                />
                {this.error()}
                <div className="row">
                    <div className="col-md-4 right-pannel">
                        <form>
                            <FieldGroup id="email_signin" type="text" label="Email" placeholder="Email" />
                            <FieldGroup id="password_signin" type="text" label="Last Name" placeholder="Last Name" />
                            <Button type="button" onClick={this.submit}>Signin</Button>
                        </form>
                    </div>
                    <div className="col-md-4 sso-widgets">
                        <div className="col-md-5">
                            <GoogleLogin clientId="659649811970-0fevgbrj1grhp2m2eplib6ar5d9csul6.apps.googleusercontent.com"
                                buttonText="Sign in"
                                onSuccess={this.props.loggedin}
                                onFailure={this.googleLoginFailure}
                            />
                            </div>
                            <div className="col-md-6">
                                <FacebookLogin appId="1532872416956208" autoLoad={false} fields="name,email,picture" onClick={"componentClicked"} callback={this.responseFacebook} />
                            </div>

                        </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loginStatus: state.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loggedin: LoggedIn,
        manualLogin: manualLogin
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);