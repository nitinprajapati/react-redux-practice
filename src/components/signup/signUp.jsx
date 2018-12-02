import React, { Component } from 'react';
import { FormGroup, Radio, Button} from 'react-bootstrap';
import {FieldGroup} from './../formGroup/formGroup';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <form>
                <FieldGroup id="firstName" type="text" label="First Name" placeholder="First Name" />
                <FieldGroup id="lastName" type="text" label="Last Name" placeholder="Last Name" />
                <FieldGroup id="email" type="email" label="Email" placeholder="Email" />
                <FieldGroup id="password" label="Password" type="password" placeholder="Password" />
                <FieldGroup id="confirmPassword" label="Confirm Password" type="password" placeholder="Confirm Passowrd" />
                <FormGroup>
                    <Radio name="radioGroup" defaultChecked inline>
                        Male
                    </Radio>{' '}
                    <Radio name="radioGroup" inline>
                        Female
                    </Radio>{' '}
                </FormGroup>
                <Button type="submit">Submit</Button>
            </form>
        );
    }
}

export default SignUpForm;