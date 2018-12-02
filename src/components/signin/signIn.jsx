import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
import {FieldGroup} from './../formGroup/formGroup';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {LoggedIn} from './../../actions/loginActions';
 
const responseFacebook = (response) => {
  console.log(response);
}
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <React.Fragment>
                <form>
                    <FieldGroup id="email_signin" type="text" label="Email" placeholder="Email" />
                    <FieldGroup id="password_signin" type="text" label="Last Name" placeholder="Last Name" />
                    <Button type="submit">Signin</Button>
                </form>
                <hr />
                OR
                <hr />
                <div className="col-md-2">
                <GoogleLogin clientId="659649811970-0fevgbrj1grhp2m2eplib6ar5d9csul6.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.props.loggedin}
                    onFailure={this.googleLoginFailure}
                />
                </div>
                <div className="col-md-6">
                    <FacebookLogin appId="1532872416956208" autoLoad={true} fields="name,email,picture" onClick={"componentClicked"} callback={responseFacebook} />
                </div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loggedin: LoggedIn
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginForm);