import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from './MaterialComponents/Button';
import Text from './MaterialComponents/Text';
import TeamLists from './Components/TeamLists';

class App extends Component {
  render() {
    return (
      <div>
        
        <MuiThemeProvider>
          <TeamLists />
          
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;



{/* <Button buttonText="See Vacations"/>
          <Button buttonText="View Vacations"/>
          <Text hintText="I332376" floatingLabel="Employee Number" />
          <DropdownList /> */}