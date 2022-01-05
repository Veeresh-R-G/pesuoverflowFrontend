import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './components/IndiDashboard';
import TeamDashboard from './components/TeamDashboard';
import Project from './components/Project';

function App() {
  return (

    <Router className='m-0 p-0'>
      <div className="App bg-slate-300">
        <div className='content'>

          <Switch>

            <Route exact path="/">
              <TeamDashboard />
            </Route>
            <Route exact path="/project">
              <Project />
            </Route>
            <Route exact path="/indi">
              <Dashboard />
            </Route>

          </Switch>

        </div>


      </div>
    </Router>
  );
}

export default App;

// <div className="App bg-slate-300">
//   <TeamDashboard />
// </div>