import React from 'react';
import { Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import PublicOnlyRoute from '../../Routes/PublicOnlyRoute/PublicOnlyRoute';
import PrivateRoute from '../../Routes/Private/PrivateRoute';
import SignIn from '../SignIn/SignIn';
import Landing from '../../Components/Landing/Landing';
import Photos from '../Photos/Photos';
import Videos from '../Videos/Videos';
import './App.css';

class App extends React.Component {
  state = {
    hasError: false 
  }

  static getDerivedStateFromError(error) {
    console.error(error);
    return {
      hasError: true
    };
  }
  
  render () {
    const { hasError } = this.state;
    return (
      <div className="App">
        {hasError && (
          <p>Sorry, there was an error. Please refresh the page and try again.</p>
        )}
        <Nav />
        <main>
          <Switch>
            <PrivateRoute 
              exact
              path={'/'}
              component={Landing}
            />
            <PrivateRoute 
              exact
              path={'/photos'}
              component={Photos}
            />
            <PrivateRoute 
              exact
              path={'/videos'}
              component={Videos}
            />
            <PublicOnlyRoute 
              path={'/signin'}
              component={SignIn}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;