import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
};
const Button = (props) => (
    <div>
        <RaisedButton label={props.buttonText} primary={true} style={style} />
    </div>
);

export default Button;