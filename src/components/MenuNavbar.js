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
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">KaaM - Dhanda</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">

          </ul>


          {
            user ?

              (<div>
                <button class="btn btn-info m-2  " onClick={handleLogout}>logout</button>

                <Link to="/dashboard"><button class="btn btn-info m-2 ">Dashboard</button></Link>
                <Link to="/searchWorker"><button class="btn btn-info m-2 ">Search</button></Link>
                <Link to="/postjob"><button class="btn btn-info m-2 ">Post Job</button></Link>
              </div>

              ) :
              <div>
                <Link to="/login"><button class="btn btn-info m-2 " onClick={()=>props.setSection("login")}>Login</button></Link>
              </div>

          }

        </div>
      </nav>
    </div>
  )
}
