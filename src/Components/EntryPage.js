import React from 'react';
import Button from '../MaterialComponents/Button';
import Text from '../MaterialComponents/Text';
import { Link } from 'react-router-dom';
import TeamLists from './TeamLists';
import EmployeeVacations from './EmployeeVacations';
import { Switch, Route } from 'react-router-dom'

class EntryPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teamText: "",
            employeeText: "",
            //buttonClicked: true
        };
    }

    seeTeamVacations() {
        console.log(this.state.teamText);
        //this.setState({buttonClicked : false});
    }

    seeEmployeeVacations() {
        console.log(this.state.employeeText);
        //this.setState({buttonClicked : false});
    }


    teamTextChanged(e) {
        this.setState({ teamText: e.target.value });
    }

    employeeTextChanged(e) {
        this.setState({ employeeText: e.target.value });
    }

    render() {
        return (
            <div>
                {
                    <div>
                        <Text hintText="Copilot" floatingLabel="Team Name" textChanged={this.teamTextChanged.bind(this)} />
                        <Link to={`/vacations/team/${this.state.teamText}`} route={this.props.route}>
                            <Button disabled={!this.state.teamText.length > 0} buttonText="See Vacations" buttonClicked={this.seeTeamVacations.bind(this)} />
                        </Link>
                        <Text hintText="I332376" floatingLabel="Employee Number" textChanged={this.employeeTextChanged.bind(this)} />
                        <Link to={`/vacations/employee/${this.state.employeeText}`} route={this.props.route}>
                            <Button disabled={!this.state.employeeText.length > 0} buttonText="View Vacations" buttonClicked={this.seeEmployeeVacations.bind(this)} />
                        </Link>
                    </div>
                }

                <Switch>
                    <Route exact path='/vacations/team/:teamName' render={(props) => <TeamLists {...props} teamName={this.state.teamText} />} />
                    <Route exact path='/vacations/employee/:iNum' render={(props) => <EmployeeVacations {...props} iNum={this.state.employeeText} />} />
                </Switch>
            </div>
        )
    }
}

export default EntryPage;