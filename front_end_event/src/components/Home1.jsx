
import React, { useEffect, useState } from 'react';
import "../style/Home1.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home1() {
    let navigate = useNavigate();

    const [events, setEvents] = useState([]);
    // const [error, setError] = useState(null);

    
  useEffect(() => {
    loadStudents();
  }, []);

    // const [user,setUser] = useState({
    //     ID:0,
    //     name:'',
    //     email:'',
    // })
    //2

    const loadStudents = async () => {
        try {
          const result = await axios.get("http://localhost:8080/api/events/getevents");
          setEvents(result.data);
        } catch (error) {
          console.error("Error loading students:", error);
        }
      };
//2
   const handleview = ()=>{
    //       e.preventDefault();
    //     await axios.get(
    //         "http://localhost:8080/api/events/getevents",
    //         user
    //    );
       navigate("/fill-event")
    }

    const addevents = ()=>{
        navigate("/add-event")
    }

    
    const updateevents = (id)=>{
        navigate(`/update-event/${id}`)
    }


    const deleteevent = async (id) => {
        await axios.delete(
            `http://localhost:8080/api/events/${id}`
        );
        loadStudents();
    }


   
    //now
//   useEffect(() => {
//     fetch('http://localhost:8080/api/events/getevents')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
      

//       })
//       .then(data => setEvents(data))
   
//   }, []);
//now


//1

//1
//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }
    return (  
        <div>
           <h1>Event List</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <div className="event-container">
            <h2>{event.name}</h2>
        <div className='event-container2'>
            <button onClick={handleview}>View</button>
            <button onClick={()=>updateevents(event.id)}>Update</button>
            <button onClick={addevents}>Add</button>
            <button onClick={() => deleteevent(event.id)}>Delete</button>
        </div>
            </div>
         
            
          </li>
        ))}
      </ul>  
        </div>
    );
}

export default Home1;