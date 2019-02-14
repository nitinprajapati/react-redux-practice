import React from 'react';
import { FormControl, ControlLabel, FormGroup, HelpBlock} from 'react-bootstrap';
export const FieldGroup = ({ id, label, errorType, errorMsg, ...props }) => {
    return (
        <FormGroup controlId={id} validationState={errorType}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {errorMsg && <HelpBlock>{errorMsg}</HelpBlock>}
            <FormControl.Feedback />
        </FormGroup>
    );
}