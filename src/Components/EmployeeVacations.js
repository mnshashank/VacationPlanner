import React from 'react';
import axios from 'axios';
import EmployeeVacation from './EmployeeVacation'
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

export default class EmployeeVacations extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeVacations: [],
            error: false
        }
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:3000/vacations/employee/" + this.props.iNum)
            .then((response) => {
                console.log(response.data);
                this.setState({ employeeVacations: response.data });
            }).catch(error => {
                this.setState({ error: true });
            });
    }

    render() {

        let displayEmployeeVacationData;
        if (!this.error && this.state.employeeVacations.vacationArray) {
            displayEmployeeVacationData = this.state.employeeVacations
                .vacationArray.map(individualVacation => {
                    return <EmployeeVacation key={individualVacation.vacationId}
                        indVacation={individualVacation} />
                });
        }
        return (
            <List>
                <Divider inset={false} />
                <Subheader>Vacation List of {this.state.employeeVacations.name}</Subheader>
                <Divider inset={false} />
                {displayEmployeeVacationData}
            </List>
        )
    }
}