// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// function Addevent() {
//     let navigate = useNavigate();

//     //7/21
//     const[event, setEvent] = useState({
//         // id:0,
//         name: "",
//         description: "",
//         date:"",
//         location: "",
//         attendee:0
//     })
  
    
//     //7/21

//     const handleInputChange = (e) => {
//         setEvent({ ...event, [e.target.name]: e.target.value });
//     };

//     const handlesubmit = async (e) => {
//         e.preventDefault();
//         //now21
//       //   const event = {
//       //     name:event.name,
//       //     description:event.description,
//       //     date : "2024-08-18T10:00:00",
//       //     location : event.location,
//       //     attendee: event.attendee,
//       // }
//     //   const event = {
//     //     name:name,
//     //     description:description,
//     //     date : "2024-08-18T10:00:00",
//     //     location : location,
//     //     attendee: attendee,
//     // }
//       //now21
    
      
//         try {
//             // await axios.post(
//             //   "http://localhost:8080/api/events/saveEvent",
//             //   event
//             // //   { headers: { 'Content-Type': 'application/json' } }
//             // );
//             // navigate("/list-event");
//             await axios.post(
//               "http://localhost:8080/api/events/saveEvent",
//               JSON.stringify(event),
        
//             );
//             navigate("/");
//           } catch (error) {
//             console.error('There was an error submitting the form!', error);
//           }

//     }
//     return ( 
//         <div>
//             <form onSubmit={(e)=> handlesubmit(e)}>

//             <div className="form-group">
//     <div className="col-25">
//       <label htmlFor="id">Event ID:</label>
//     </div>
//     <input
//       type="text"
//       id="id"
//       name="id"
//       value={event.id}
//       onChange={(e) => handleInputChange(e)}
//       required
//     />
//   </div>

//   <div className="form-group">
//     <div className="col-25">
//       <label htmlFor="name">Event Name:</label>
//     </div>
//     <input
//       type="text"
//       id="name"
//       name="name"
//       value={event.name}
//       onChange={(e) => handleInputChange(e)}
//       required
//     />
//   </div>

//   <div className="form-group">
//     <div className="col-25">
//       <label htmlFor="eventDescription">Event Description:</label>
//     </div>
//     <textarea
//       id="eventDescription"
//       name="description"
//       value={event.description}
//       onChange={(e) => handleInputChange(e)}
//       required
//     ></textarea>
//   </div>

//   <div className="form-group">
//     <div className="col-25">
//       <label htmlFor="eventDate">Event Date:</label>
//     </div>
//     <input
//       type="date"
//       id="eventDate"
//       name="date"
//       value={event.date}
//       onChange={(e) => handleInputChange(e)}
//       required
//     />
//   </div>

//   <div className="form-group">
//     <div className="col-25">
//       <label htmlFor="eventLocation">Event Location:</label>
//     </div>
//     <input
//       type="text"
//       id="eventLocation"
//       name="location"
//       value={event.location}
//       onChange={(e) => handleInputChange(e)}
//       required
//     />
//   </div>


//   <button type="submit">Submit</button>
// </form>

//         </div>
//      );
// }

// export default Addevent;

// endddddddddddddddd



// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Addevent() {
//   let navigate = useNavigate();

//   //77777777777
//   const [event, setEvent] = useState({
//     // id:"",
    
//     name: "",
//     description: "",
//     date: "",
//     location: "",
//     attendee: 8,

//     // Assuming attendee is a number
//   });
//   //777777777777777777

//   const handleInputChange = (e) => {
//     setEvent({ ...event, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Prepare data in JSON format
//     const eventData = JSON.stringify(event);
//     // console.log("Event Data:", eventData);

 

//     try {
//       await axios.post(
//         "http://localhost:8080/api/events/saveEvent",
//         eventData,
        
//         { headers: { "Content-Type": "application/json" } }
//       );
      
//       navigate("/"); // Navigate to the desired page after successful submission
//     } catch (error) {
//       console.error("There was an error submitting the form!", error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={(e) => handleSubmit(e)}>
//         {/* ... your form fields here ... */}

    

     
//         <div className="form-group">
//     <div className="col-25">
//       <label htmlFor="id">Event ID:</label>
//     </div>
//     <input
//       type="text"
//       id="id"
//       name="id"
//       value={event.id}
//       onChange={(e) => handleInputChange(e)}
//       required
//     />
//   </div>

//   <div className="form-group">
//     <div className="col-25">
//       <label htmlFor="name">Event Name:</label>
//     </div>
//     <input
//       type="text"
//       id="name"
//       name="name"
//       value={event.name}
//       onChange={(e) => handleInputChange(e)}
//       required
//     />
//   </div>

//   <div className="form-group">
//     <div className="col-25">
//       <label htmlFor="eventDescription">Event Description:</label>
//     </div>
//     <textarea
//       id="eventDescription"
//       name="description"
//       value={event.description}
//       onChange={(e) => handleInputChange(e)}
//       required
//     ></textarea>
//   </div>

//   <div className="form-group">
//     <div className="col-25">
//       <label htmlFor="eventDate">Event Date:</label>
//     </div>
//     <input
//       type="date"
//       id="eventDate"
//       name="date"
//       value={event.date}
//       onChange={(e) => handleInputChange(e)}
//       required
//     />
//   </div>

//   <div className="form-group">
//     <div className="col-25">
//       <label htmlFor="eventLocation">Event Location:</label>
//     </div>
//     <input
//       type="text"
//       id="eventLocation"
//       name="location"
//       value={event.location}
//       onChange={(e) => handleInputChange(e)}
//       required
//     />
//   </div>

//   <div className="form-group">
//     <div className="col-25">
//       <label htmlFor="eventDate">Event Date:</label>
//     </div>
//     <input
//       type="date"
//       id="eventDate"
//       name="date"
//       value={event.date}
//       onChange={(e) => handleInputChange(e)}
//       required
//     />
//   </div>

//   <div className="form-group">
//     <div className="col-25">
//       <label htmlFor="eventLocation">Event Location:</label>
//     </div>
//     <input
//       type="text"
//       id="eventLocation"
//       name="location"
//       value={event.location}
//       onChange={(e) => handleInputChange(e)}
//       required
//     />
//   </div>




        
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Addevent;













import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Addevent() {
  let navigate = useNavigate();

  // Initial state with empty strings for all fields
  const [event, setEvent] = useState({
    name: "",
    description: "",
    date: "",
    location: "",
    attendee: "", // Assuming attendee is a string representation of an integer
  });

  // Error state to manage validation errors
  const [errors, setErrors] = useState({});

  // Function to handle form input changes
  const handleInputChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined }); // Clear error on change
  };

  // Function to validate form data before submission
  const validateForm = () => {
    const newErrors = {};

    // Add validation rules for each field here
    if (!event.name) {
      newErrors.name = "Event name is required";
    }
    if (!event.description) {
      newErrors.description = "Event description is required";
    }
    if (!event.date) {
      newErrors.date = "Event date is required";
    }
    if (!event.location) {
      newErrors.location = "Event location is required";
    }
    if (!event.attendee) {
      newErrors.attendee = "Number of attendees is required";
    } else {
      // Additional validation for attendee (e.g., non-negative integer)
      if (isNaN(event.attendee) || parseInt(event.attendee) < 0) {
        newErrors.attendee = "Please enter a valid number of attendees (non-negative)";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Don't submit if validation fails
    }

    // Prepare data in JSON format
    const eventData = JSON.stringify(event);

    try {
      await axios.post(
        "http://localhost:8080/api/events/saveEvent",
        eventData,
        { headers: { "Content-Type": "application/json" } }
      );

      navigate("/"); // Navigate to the desired page after successful submission
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Form fields with error handling */}
        <div className="form-group">
          <label htmlFor="name">Event Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={event.name}
            onChange={handleInputChange}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Event Description:</label>
          <textarea
            id="description"
            name="description"
            value={event.description}
            onChange={handleInputChange}
            required
          />
          {errors.description && (
            <span className="error">{errors.description}</span>
          )}
        </div>

        {/* ... other form fields with similar error handling ... */}
        <div className="form-group">
    <div className="col-25">
      <label htmlFor="eventDate">Event Date:</label>
    </div>
    <input
      type="date"
      id="eventDate"
      name="date"
      value={event.date}
      onChange={(e) => handleInputChange(e)}
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
      value={event.location}
      onChange={(e) => handleInputChange(e)}
      required
    />
  </div>


        

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Addevent;
