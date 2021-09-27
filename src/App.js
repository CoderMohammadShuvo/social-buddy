import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from '../src/Component/About/About';
import User from '../src/Component/User/User';
import Home from '../src/Component/Home/Home';

import NotFound from '../src/Component/NotFound/NotFound';
import PostDetails from './Component/PostDetials/PostDetails';

function App() {
  return (
    <div className="App">
     <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/user">
            <User></User>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/post/:id">
            <PostDetails></PostDetails>
          </Route>
          <Route path="/*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
