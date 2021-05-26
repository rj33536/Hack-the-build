import React from 'react';
import MenuNavbar from './components/MenuNavbar'
import Login from './components/login'
import WorkerForm from './components/worker'
import EmployerForm from './components/employeer'
import PostJob from "./components/postJob"
import Dashboard from './components/dashboard'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import SearchWorker from "./components/searchWorker"
import Allpost from './components/allpost';
import Workerauthenticate from './components/AuthenticateWorker/workerauthenticate';
const App = () => {
  const [section, setSection] = React.useState("login");
  return (
    <div className="App">
      {/* <SearchWorker /> */}
      {
        section === "login" ? <Login setSection={setSection} /> : (
          <div>

            <Router>
              <MenuNavbar setSection={setSection} />
              <Route path="/" exact component={Dashboard} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/searchWorker" component={SearchWorker} />
              <Route path="/Workerauthenticate" component={Workerauthenticate}/>
              <Route path="/postjob" component={PostJob} />
              <Route path="/allpost" component={Allpost}/>

            </Router>
          </div>
        )
      }



    </div>
  );
}

export default App;
