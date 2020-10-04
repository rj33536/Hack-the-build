import React,{useState} from "react";
import "./searchWorker.css";
import firebase from '../firebase';
export default function SearchWorker(props) {
    const [name, setName] = useState("");
    const [users, setUsers] = useState([]);
    const changeSearch = (e) => {
        setName(e.target.value);
    }
    
    //kha pr? 
    // ruk dekhio abhi 
    //startat
    
    React.useEffect(()=>{
        let usersdemo = [];
        firebase.database().ref('userdetail').once("value").then(function(snapshot){
         snapshot.forEach((data)=>{
                usersdemo.push(data.val());
                console.log(data.val());
            })
        }).then(()=>{setUsers(usersdemo)});
        
        
    },[]);
    
    console.log(users);
    return (
        <div className="search--container">
            <input id="searchbar" type="text" onChange={changeSearch} />
            <table id="allUsers ">
                <th>Name</th>
                <th>Phone No.</th>
                <th>Profession</th>
                
                {users
                .filter((user)=>{
                    if(user.fullname)
                    return user.fullname.toLowerCase().includes(name);
                    return true;
                    
                })
                .map((user,idx) => {
                    return (
                        
                        <tr className="user-card" key={user.phone}>
                            <td><h5>{user.fullname}</h5></td>
                            <td><h5>{user.phone}</h5></td>
                            <td className="d-flex">
                                {user.role?user.role
                                .map((bubble)=>{
                                    return <div className="bubble">{bubble}</div>
                                })
                                :(<div></div>)}
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )


}