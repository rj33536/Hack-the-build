import React from 'react';
import MenuNavbar from './components/MenuNavbar'
import Login from './components/login'
import WorkerForm from './components/worker'
import EmployerForm from './components/employeer'
import PostJob from "./components/postJob"
import Dashboard from './components/dashboard'
import { BrowserRouter as Router, Route } from "react-router-dom"
import SearchWorker from "./components/searchWorker"
const App = () => {
  const [section, setSection] = React.useState("home");
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
              <Route path="/postjob" component={PostJob} />
            </Router>
          </div>
        )
      }



    </div>
  );
}

export default App;
