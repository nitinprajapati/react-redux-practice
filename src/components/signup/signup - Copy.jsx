import React, { Component } from 'react';
import { FormControl, ControlLabel, FormGroup, HelpBlock, Radio, Button} from 'react-bootstrap';
const FieldGroup = ({ id, label, error_message, validatorMsg, ...props }) => {
    return (
        <FormGroup controlId={id} validationState={validatorMsg}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            <FormControl.Feedback />
            {error_message && <HelpBlock>{error_message}</HelpBlock>}
        </FormGroup>
    );
}

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: {
                validationStatus: null,
                maxLength: 10,
                minLength: 3,
                error_msg: ""
            },
            lastName: {
                validationStatus: null,
                maxLength: 10,
                minLength: 3,
                error_msg: ""
            },
            email: {
                validationStatus: null,
                maxLength: 10,
                minLength: 3,
                error_msg: ""
            },
            password: {
                validationStatus: null,
                maxLength: 10,
                minLength: 3,
                error_msg: ""
            },
            c_password:{
                validationStatus: null,
                maxLength: 10,
                minLength: 3,
                error_msg: ""
            },
            gender:{
                validationStatus: ""
            }
        };
        this.change = this.change.bind(this);
    
    }

    commonValidation (el, validationProps) {
        let val = el.target.value.trim(); let msg = "";
        if(val.length < validationProps.minLength){
            msg = `${el.target.placeholder } can not be less than ${validationProps.minLength} characters`;
        }
        else if(val.length > validationProps.maxLength){
            msg = `${el.target.placeholder } can not be greater than ${validationProps.maxLength} characters`;
        }
        return msg;
    }

    change(ev){
        var someProperty = "", status = null, msg = "";
        switch(parseInt(ev.target.getAttribute("data-validator"))){
            case 1: someProperty = this.state.firstName; msg = this.commonValidation(ev, this.state.firstName); break;
            case 2: someProperty = this.state.lastName; msg = this.commonValidation(ev, this.state.lastName);break;
            case 3: someProperty = this.state.email; break;
            case 4: someProperty = this.state.password; break;
            case 5: someProperty = this.state.c_password; break;
            default : 
        }
        
        if(msg !== ""){
            status = "error";
        }

        someProperty.validationStatus = status;
        someProperty.error_msg = msg;
        this.setState({someProperty})
    }

    render() {
        return (
            <form>
                <FieldGroup id="firstName" type="text" label="First Name" placeholder="First Name" error_message={this.state.firstName.error_msg} validatorMsg={this.state.firstName.validationStatus} onChange={this.change} data-validator="1" />
                <FieldGroup id="lastName" type="text" label="Last Name" placeholder="Last Name" error_message={this.state.lastName.error_msg} validatorMsg={this.state.lastName.validationStatus} onChange={this.change} data-validator="2" />
                <FieldGroup id="email" type="email" label="Email" placeholder="Email" error_message={this.state.email.error_msg} validatorMsg={this.state.email.validationStatus} onChange={this.change} data-validator="3" />
                <FieldGroup id="password" label="Password" type="password" placeholder="Password" error_message={this.state.password.error_msg} validatorMsg={this.state.password.validationStatus} onChange={this.change} data-validator="4" />
                <FieldGroup id="confirmPassword" label="Confirm Password" type="password"  error_message={this.state.c_password.error_msg}placeholder="Confirm Passowrd" validatorMsg={this.state.c_password.validationStatus} onChange={this.change} data-validator="5" />
                <FormGroup>
                    <Radio name="gender" checked inline>
                        Male
                    </Radio>{' '}
                    <Radio name="gender" inline>
                        Female
                    </Radio>{' '}
                </FormGroup>


                <Button type="submit">Submit</Button>
            </form>
        );
    }
}

export default SignUpForm;