import "../style/Home.css"
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Home() {
    let navigate = useNavigate();
    const [displaysubmit, setdisplaysubmit] = useState(true);

    // const [ID, setID] = useState('');
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    const [user,setUser] = useState({
        ID:0,
        name:'',
        email:'',
    })

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleRegister = async(e)=>{
      //   e.preventDefault();
      //   await axios.post(
      //       "http://localhost:8080/api/users/saveUser",
      //       user
      //  );
       navigate("/fill-event")
       
    }
    return ( 
        <div>
            <div className="welcome-sec">
          <h1>Welcome to Event Management</h1>
          <p>Discover and manage events effortlessly.</p>
          </div>


          <form onSubmit={handleRegister}>
            <div>

            <div className="col-25">
            <label htmlFor="ID">ID</label>
            </div>

        <input
          type="text"
          id="ID"
           name="ID"
          value={user.ID}
          onChange={(e) => handleInputChange(e)}  
          required
        />
</div>


<div>

            <div className="col-25">
            <label htmlFor="name">Name</label>
            </div>

        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={(e) => handleInputChange(e)}
         
          required
        />
</div>


<div>

            <div className="col-25">
            <label htmlFor="email">Email</label>
            </div>

        <input
          type="email"
          id="email"
           name="email"
          value={user.email}
          onChange={(e) => handleInputChange(e)}
         
          required
        />
</div>

{displaysubmit ? <button type="submit">Register</button> : null}

<button onClick={()=>{setdisplaysubmit((e)=>{return !e})}}>Register11</button>


            
          </form>

        </div>
     );
}

export default Home;