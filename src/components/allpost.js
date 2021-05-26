import React,{useState,useEffect} from 'react';
import firebase from "../firebase";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function Allpost() {
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
    console.log(jobs)
    return (
        <div>
            <table id="allUsers" class="customers">
                <th>Title</th>
                <th>Description</th>
                <th>Profession</th>
                <th>State</th>

                {jobs
                    .map((job, idx) => {
                        return (

                            <tr className="user-card" >
                                <td><h5>{job.title}</h5></td>
                                <td><h5>{job.description}</h5></td>
                                <td className="">
                                    {job.role ? job.role
                                        .map((bubble) => {
                                            return <div className="bubble">{bubble}</div>
                                        })
                                        : (<></>)}
                                </td>
                                <td><h5>{user.state}</h5></td>
                            </tr>
                        )
                    })}
            </table>
       
        </div>
    )
}

export default Allpost


