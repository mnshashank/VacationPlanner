import React from 'react';
import axios from 'axios';
import TeamList from './TeamList';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

export default class TeamLists extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            vacations: [],
            error: false
        };
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:3000/vacations/team/" + this.props.teamName)
            .then((response) => {
                console.log(response.data)
                this.setState({ vacations: response.data });
            }
            ).catch(error => {
                this.setState({ error: true });
            });
    }

    render() {
        let displayVacationData;
        if (!this.state.error) {
            displayVacationData = this.state.vacations
                .map(individualVacation => {
                    return <TeamList key={individualVacation._id}
                        indVacation={individualVacation} />
                });
        }
        const style = {
            marginLeft: "20%",
            marginRight: "20%",
            marginTop: "10%",
            padding: "8px",
            border: "1px solid black"
        };

        return (
            <div>
                <List style={style}>
                    <Divider inset={false} />
                    <Subheader>Vacations List</Subheader>
                    <Divider inset={false} />
                    {displayVacationData}
                </List>
            </div>

        )

    }
}