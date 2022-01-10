
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './components/IndiDashboard';
import TeamDashboard from './components/TeamDashboard';
import ProjectDashboard from './components/ProjectDashboard';
import QuilEditor from './components/QuilEditor';
import ChatComponent from './components/ChatComponent';
//import Test from './components/Test';
import Navbar from './components/Navbar';
import CardProject from './components/CardProject';
import ClubDashBoard from './components/ClubDashBoard';
import ClubDashCon from './components/ClubDashCon';
function App() {
  return (

    <Router>
      <div className="App">
        <div className='content'>
          <Navbar />
          <Switch>
           
            <Route exact path="/project">
              <ProjectDashboard />
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
          
            <Route exact path="/team">
              <TeamDashboard />
            </Route>
            
            <Route exact path="/club">
              <ClubDashBoard />
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
/*
 <Route exact path="/test">
              <Test />
            </Route>

              <Route exact path="/test">
              <Test />
            </Route>
*/