import React, { Component } from 'react';
import { FormGroup, Radio, Button} from 'react-bootstrap';
import {FieldGroup} from './../formGroup/formGroup';
import { signUp } from './../../actions/signUpActions';
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import Spinner from "./../loader/spinner";
import toastr from 'reactjs-toastr';
import 'reactjs-toastr/lib/toast.css';

class SignUpForm extends Component {
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
        this.state = {

        }
    }

    registered(){
        if(this.props.signup.registered){
            //toastr.success('Registered successfully', 'Please login to explore...');
        }
    }

    validateInputs (values, event) {
        let res = true;
        if(typeof values === 'object'){
            for(let i=0; i<6; i++){
                if(values[i].name === "email"){
                    var reg = /\S+@\S+\.\S+/;
                    if(values[i].value.trim() === ""){
                        res = false;
                        this.setState({
                            [values[i].name+"ET"] : "error",
                            [values[i].name+"ETM"] :  `${values[i].placeholder} can not be blank.`
                        });
                    }
                    else if(!reg.test(values[i].value.trim())){
                        res = false;
                        this.setState({
                            [values[i].name+"ET"] : "error",
                            [values[i].name+"ETM"] :  `Please enter a valid email address.`
                        });
                    }
                }
                else if(values[i].value.trim() === ""){
                    res = false;
                    this.setState({
                        [values[i].name+"ET"] : "error",
                        [values[i].name+"ETM"] :  `${values[i].placeholder} can not be blank.`
                    });
                }
            }
            return res;
        }
        else {
            this.setState({
                [event.currentTarget.name+"ET"] : null,
                [event.currentTarget.name+"ETM"] :  ""
            });

            if(values === "email"){
                var re = /\S+@\S+\.\S+/;
                if(event.currentTarget.value.trim() === ""){
                    this.setState({
                        [event.currentTarget.name+"ET"] : "error",
                        [event.currentTarget.name+"ETM"] :  `${event.currentTarget.placeholder} can not be blank.`
                    });
                }
                else if(!re.test(event.currentTarget.value.trim())){
                    this.setState({
                        [event.currentTarget.name+"ET"] : "error",
                        [event.currentTarget.name+"ETM"] :  `Please enter a valid email address.`
                    });
                }
            }
            else {
               if(event.currentTarget.value.trim() === "") {
                    this.setState({
                        [event.currentTarget.name+"ET"] : "error",
                        [event.currentTarget.name+"ETM"] :  `${event.currentTarget.placeholder} can not be blank.`
                    });
               }
            }
        }
    }

    submit(event){
        event.preventDefault();
        const data = new FormData(event.currentTarget.parentElement);
        let payload = {
            FirstName: data.get("firstName"),
            LastName: data.get("lastName"),
            Email: data.get("email"),
            Password: data.get("password"),
            CPassword: data.get("cpassword"),
            Gender: data.get("sex")
        }
        
        if(this.validateInputs(event.currentTarget.parentElement, payload)){
            this.props.signUp(payload);
        }
    }

    error(){
        if(this.props.signup.error){
            return (
                <div>{this.props.signup.error_message}</div>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.registered()}
                {this.error()}
                 <Spinner 
                    status={this.props.signup.fetching}
                    message={this.props.signup.message} 
                    loaderType={this.props.signup.loaderType}
                    color={this.props.signup.color}
                   
                />
                <form>  
                    <FieldGroup name="firstName" id="firstName" type="text" label="First Name" placeholder="First Name" errorType={this.state.firstNameET} errorMsg={this.state.firstNameETM} onChange={(e) => {this.validateInputs('', e)}} />
                    <FieldGroup name="lastName" id="lastName" type="text" label="Last Name" placeholder="Last Name" errorType={this.state.lastNameET} errorMsg={this.state.lastNameETM} onChange={(e) => {this.validateInputs('', e)}} />
                    <FieldGroup name="email" id="email" type="email" label="Email" placeholder="Email" errorType={this.state.emailET} errorMsg={this.state.emailETM} onChange={(e) => {this.validateInputs('email', e)}} />
                    <FieldGroup name="password" id="password" label="Password" type="password" placeholder="Password" errorType={this.state.passwordET} errorMsg={this.state.passwordETM} onChange={(e) => {this.validateInputs('', e)}} />
                    <FieldGroup name="cpassword" id="cpassword" label="Confirm Password" type="password" placeholder="Confirm Passowrd" errorType={this.state.cpasswordET} errorMsg={this.state.cpasswordETM} onChange={(e) => {this.validateInputs('', e)}} />
                    <FormGroup>
                        <Radio name="sex" value="Male" defaultChecked inline>
                            Male
                        </Radio>
                        <Radio name="sex" value="Female" inline>
                            Female
                        </Radio>
                    </FormGroup>
                    <Button type="button" onClick={this.submit}>Sign Up</Button>
                </form>

            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        signup: state.signup
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        signUp: signUp
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
