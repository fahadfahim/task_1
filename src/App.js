import Sidebar from "./component/Sidebar/Sidebar";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import './App.css'
import Header from "./component/Header/Header";
import Tables from "./component/Tables/Tables";

function App() {

  return (
    <div className="app">
      <Router>
        <Sidebar />
        <div className="container">
          <Header />
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/tables' />} />
            <Route exact path={'/tables'}>
              <Tables />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
