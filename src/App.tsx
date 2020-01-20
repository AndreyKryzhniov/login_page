import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Login from './Components/Login'
import PasswordRecover from './Components/PasswordRecover'
import Header from './Components/header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <Route render ={ () => <Login/>} path='/login'/>
      <Route render ={ () => <PasswordRecover/>} path='/password_recover'/>
    </div>
  );
}

export default App;
