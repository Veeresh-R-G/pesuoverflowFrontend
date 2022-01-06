
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './components/IndiDashboard';
import TeamDashboard from './components/TeamDashboard';
import Project from './components/Project';
import QuilEditor from './components/QuilEditor';
import ChatComponent from './components/ChatComponent';
function App() {
  return (

    <Router className='m-0 p-0'>
      <div className="App">
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
            <Route exact path="/editor">
              <QuilEditor />
            </Route>
            <Route exact path="/chat">
              <ChatComponent />
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