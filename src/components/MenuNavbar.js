import React, { useState, useEffect } from "react";
import { Redirect, Link } from 'react-router-dom';
export default function MenuNavbar(props) {
  const [user, setUser] = useState();
  let [isLoggedIn, setisLoggedIn] = useState(false);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");

    isLoggedIn = true;
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const handleLogout = () => {
    // console.log(user);
    setUser({});
    props.setSection("login");
    isLoggedIn = false;
    localStorage.clear();
  };


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/"><span className="navbar-brand" >KAAM-DHANDHA </span></Link>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

          </ul>


          {
            user ?

              (<div>
                <div class="dropdown">
                  <span className="text-white">{user.phone}</span>
                  
                    <Link className="btn btn-info m-2 " to="/dashboard">Dashboard</Link>
                    <Link className="btn btn-info m-2 " to="/searchWorker">Search</Link>
                    <Link className="btn btn-info m-2 " to="/postjob">Post Job</Link>
                    <Link className="btn btn-info m-2 " to="/allpost">All Jobs</Link>
                    <Link className="btn btn-info m-2 " to="/Workerauthenticate">Auth Majdoor</Link>
                    <button className="btn btn-info m-2  " onClick={handleLogout}>logout</button>
                </div>



              </div>

              ) :
              <div>
                <div class="dropdown">
                 
                    <Link className="btn btn-info m-2 " to="/searchWorker">Search</Link>
                    <Link className="btn btn-info m-2 " to="/allpost">Post Job</Link>
                    <Link to="/login"><button className="btn btn-info m-2 " onClick={() => props.setSection("login")}>Login</button></Link>

                    <button className="btn btn-info m-2  " onClick={handleLogout}>logout</button>
                  </div>
              </div>

          }

        </div>
      </nav>
    </div>
  )
}
