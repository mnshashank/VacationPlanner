import React from 'react';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

const TeamList = (props) => {
    

    return (
        <div>
        <ListItem
            primaryText={props.indVacation.name}
            primaryTogglesNestedList={true}
            initiallyOpen={false}
            leftAvatar={<Avatar>{props.indVacation.name.substring(0,2)}</Avatar>}
            nestedItems={
                props.indVacation.vacationArray.length > 0 && 
                props.indVacation.vacationArray.map(individualVacation => {
                    return <ListItem key={individualVacation.vacationId}
                    primaryText={
                        individualVacation.message + " from : " + individualVacation.from + 
                        " till : " + individualVacation.to
                    } />
                })
            }
        />
        <Divider inset={false} />
        </div>
    )
}

export default TeamList;
