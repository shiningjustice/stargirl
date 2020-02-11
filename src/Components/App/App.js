import React from 'react';
import SignInView from '../../Routes/Public/SignInView/SignInView';
import MainView from '../../Routes/Private/MainView/MainView';
import Nav from '../../Routes/Private/MainView/Nav/Nav';
import './App.css';

function App() {
  // for public and private routes
  const logInOrSomething = () => { //pbtag
    return (
      // <SignInView />
      <MainView />
    )
  }

  const renderNavRoutes = () => {
    return (
      // if logged in: 
      <Nav />
      // else
    )
  }

  return (
    <div className="App">
      {renderNavRoutes()}
      {logInOrSomething()}
    </div>
  );
}

export default App;