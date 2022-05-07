import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BlogDetails from './BlogDetails';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create_lost from './Create_lost';
import Create_found from './Create_found';
import Title from './Title';
import FoundItems from './FoundItems';

function App() {
  return (
    <Router>
      <div className="App">
        <Title/>
        <Navbar/>
        <div className="App">
      <Route exact path="/login"> 
       <Login />
         </Route>
      </div>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create_lost">
              <Create_lost />
            </Route>
            <Route path="/create_found">
              <Create_found/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/foundItems">
              <FoundItems/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
