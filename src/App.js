
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './components/IndiDashboard';
import TeamDashboard from './components/TeamDashboard';
import ProjectDashboard from './components/ProjectDashboard';
import QuilEditor from './components/QuilEditor';
import ChatComponent from './components/ChatComponent';
import Navbar from './components/Navbar';
import CardProject from './components/CardProject';
import ClubDashBoard from './components/ClubDashBoard';
import Login from './components/Login';
import ErrorPage from './components/ErrorPage';
import Register from './components/Register';
import CarouselCompo from './components/CarouselCompo';
function App() {
  return (

    <Router>
      <div className="App">
        <div className='content'>

          <Switch>
            <Route exact path="/">
              <Navbar />
              <TeamDashboard />
            </Route>
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
            <Route exact path="/card">
              <CardProject />
            </Route>
            <Route exact path="/club">
              <ClubDashBoard />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/error">
              <ErrorPage />
            </Route>
            <Route exact path="/reg">
              <Register />
            </Route>
            <Route exact path="/car">
              <CarouselCompo />
            </Route>
            <Route>
              <ErrorPage />
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