import React from 'react';
import TextField from 'material-ui/TextField';

const Text = (props) => (
    <TextField hintText={props.hintText} floatingLabelText={props.floatingLabel} onChange={props.textChanged}/>
);

export default Text;
