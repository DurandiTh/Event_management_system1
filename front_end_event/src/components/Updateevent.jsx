// import { Link, useNavigate, useParams } from "react-router-dom";
// import React, { useEffect, useState } from 'react';
// import axios from "axios";

// function Updateevent() {
//     let navigate = useNavigate();
//     const { id } = useParams(); 

//     const [event, setEvent] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         department: '',
//     });

//     const { firstName, lastName, email, department } = student;
    

//     useEffect(() => {
//         const loadStudent = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8080/api/v1/student/getUser/${id}`);
//                 setStudent(response.data);
//             } catch (error) {
//                 console.error("Error loading student:", error);
//             }
//         };

//         loadStudent();
//     }, [id]); // Include id in the dependency array

//     const handleInputChange = (e) => {
//         setStudent({ ...student, [e.target.name]: e.target.value });
//     };

//     const updateStudent = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.put(`http://localhost:8080/api/v1/student/updateUser/${id}`, student);
//             navigate("/view-students", { state: { updatedStudent: student } });
//         } catch (error) {
//             console.error("Error updating student:", error);
//         }
//     };
 
//     return (
//         <div>

//         </div>
//       );
// }

// export default Updateevent;
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState} from 'react';
import "../style/Updateevent.css"

import { Routes, Route, useParams } from 'react-router-dom';
function Updateevent() {
    let navigate = useNavigate();



    let { id } = useParams();
    const[name,setName] = useState("");
    const[description,setDescription] = useState("");
    const[date,setDate] = useState("");
    const[location,setLocation] = useState("");
    const[attendee,setAttendee] = useState("");
    
    useEffect(() => {
        fetch(`http://localhost:8080/api/events/getEvent/${id}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
              
            }
            return response.json();
          })
        //   .then(data => setEvents(data))
            .then(data => {
                
                console.log(data);
                setName(data.name);
                setDescription(data.description);
                setDate(data.date);
                setLocation(data.location);
                setAttendee(data.attendee);
                
            
            }
        )
          .catch(error => {
            console.error('Error fetching data:', error);
            
          });
      }, []);
    
    // console.log(id)

    const handlesubmit = async (e) => {
        e.preventDefault();
        const event = {
            name:name,
            description:description,
            date : "2024-08-18T10:00:00",
            location : location,
            attendee: attendee,
        }
      
        try {
            await axios.put(
              `http://localhost:8080/api/events/updateUser/${id}`,
              event
            //   { headers: { 'Content-Type': 'application/json' } }
            );
            // navigate("/list-event");
            navigate("/");
          } catch (error) {
            console.error('There was an error submitting the form!', error);
          }

    }


    
    return ( 
        <div>
             <form onSubmit={(e)=> handlesubmit(e)}>



<div className="form-group">
<div className="col-25">
<label htmlFor="name">Event Name:</label>
</div>
<input
type="text"
id="name"
name="name"
value={name}
onChange={(e)=>setName(e.target.value)}
required
/>
</div>

<div className="form-group">
<div className="col-25">
<label htmlFor="eventDescription">Event Description:</label>
</div>
<textarea
id="eventDescription"
name="description"
value={description}
onChange={(e)=>setDescription(e.target.value)}
required
></textarea>
</div>

<div className="form-group">
<div className="col-25">
<label htmlFor="eventDate">Event Date:</label>
</div>
<input
type="date"
id="eventDate"
name="date"
onChange={(e)=>setDate(e.target.value)}
required
/>
</div>

<div className="form-group">
<div className="col-25">
<label htmlFor="eventLocation">Event Location:</label>
</div>
<input
type="text"
id="eventLocation"
name="location"
value={location}
onChange={(e)=>setLocation(e.target.value)}
required
/>
</div>
<button type="submit">Submit</button>
</form>

        </div>
     );
}

export default Updateevent;