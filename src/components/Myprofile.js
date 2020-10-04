import React,{useState,useEffect} from 'react';
import { Fragment } from 'react';
import classes from './Myprofile.module.css'
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router';
import firebase from "../firebase";

function Ecard(props) {
  const [jobs,setJobs] = useState([]);
  const [user, setUser]  =useState({});
  useEffect(()=>{
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      firebase
      .database()
      .ref("/userdetail/"+foundUser.phone)
      .once("value")
      .then((data)=>{
        console.log(data.val());
        setUser(data.val());
      })
      .catch((err)=>{
        console.log(err)
      })
      let jobsdemo = [];
    firebase.database().ref('jobs').once("value").then(function(snapshot){
     snapshot.forEach((data)=>{
          const jobObj = data.val();
          if(jobObj.phone===foundUser.phone)
            jobsdemo.push(jobObj);
        })
    }).then(()=>{console.log(jobsdemo);setJobs(jobsdemo)});
    }
    
    
    
},[]);
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {

    }
  }
  function showPosition(position) {
    console.log(position);
    alert(position.coords.latitude + " " + position.coords.longitude);
  }

    return (
    <Fragment>

      <div className={classes.card}>
        <div className={classes.content}>
          <h2>{user.fullname}</h2>
          <h4>{user.phone} </h4>
          <h4>MY Complete Address </h4>
          <h4>{user.address} </h4>
          <Button variant="info">Add New jobs</Button>
          <Button onClick={getLocation} variant="info">Get my location</Button>
          <h4>My posts </h4>
          <hr></hr>
          <div className={classes.content}>
            {
              jobs.map((job) => {
                return <div>
                  <h5>{job.title}</h5>
                  <p>{job.description}</p>
                  <hr></hr>
                </div>;
              })
            }
          </div>
        </div>
      </div>


    </Fragment>
  );
}

export default Ecard;



