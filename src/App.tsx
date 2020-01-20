import React from 'react';
import {Route} from "react-router-dom";
import Login from './Components/Login'

const App: React.FC = () => {
  return (
    <div>
      <Route render ={ () => <Login/>} path='/login'/>
      {/*<Route render ={ () => <Registration/>} path='/registration'/>*/}
      {/*<Route render ={ () => <PasswordRecover/>} path='/password_recover'/>*/}
      {/*<Route render ={ () => <ProfileRecover/>} path='/profile_recover'/>*/}
    </div>
  );
}

export default App;
