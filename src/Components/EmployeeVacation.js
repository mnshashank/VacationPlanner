import React from 'react';
import { ListItem } from 'material-ui/List';

const EmployeeVacation = (props) => {

    return (
        <ListItem
            primaryText={props.indVacation.name + "   " +props.indVacation.message + " from : " + props.indVacation.from + 
            " till : " +props.indVacation.to}
        />
    )
}

export default EmployeeVacation;