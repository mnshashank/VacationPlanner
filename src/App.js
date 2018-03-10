import React from 'react';
import './App.css';
import TeamLists from './Components/TeamLists';
import EmployeeVacations from './Components/EmployeeVacations';
import EntryPage from './Components/EntryPage';
import { Switch, Route } from 'react-router-dom'


class App extends React.Component {

  render() {
    return (
      <div>
          <EntryPage />
      </div>
    );
  }
}

export default App;