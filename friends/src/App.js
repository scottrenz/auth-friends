import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import AppFriends from './components/AppFriends';
import PrivateRoute from './components/PrivateRoute';

function App() {
const  eraseToken = () => {
    localStorage.setItem('token', '')
  };

  return (
<div>
      <button onClick={eraseToken}
    >Erase Token</button>

    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={AppFriends} />
        {/* <PrivateRoute path="/anotherRoute" component={SomeOtherComponent} /> */}
      </div>
    </Router>
    </div>
  );
}

export default App;
