import React, { Component } from 'react';
import Home from './HomeComponent';
import Notes from './NotesComponent';
import Inspiration from './InspirationComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { INSPIRATIONS } from '../shared/inspirations';

class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      inspirations: INSPIRATIONS
    };
  }
  render() {
    const HomePage = () => {
      return(
          <Home />
      );
    }
    const NotesPage = () => {
      return(
          <Notes />
      );
    }
    return (
      <div>
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route path='/notes' component={NotesPage} />
              <Route path='/inspiration' component={()=> <Inspiration inspirations = {this.state.inspirations} />} />
              <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default Main;