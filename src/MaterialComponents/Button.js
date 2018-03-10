import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
};
const Button = (props) => (
    <div>
        <RaisedButton disabled = {props.disabled} label={props.buttonText} primary={true} style={style} onClick = {props.buttonClicked}/>
    </div>
);

export default Button;