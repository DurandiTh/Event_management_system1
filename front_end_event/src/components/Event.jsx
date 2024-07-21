import { useState } from "react";
import React, { useEffect} from 'react';
import "../style/Event.css"


function Event() {

    const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/events/getevents')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setEvents(data))
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }


    // const[event, setEvent] = useState({
    //     name: "",
    //     description: "",
    //     date:"",
    //     location: "",
    // })

    // const handleInputChange = (e) => {
    //     setEvent({ ...event, [e.target.name]: e.target.value });
    // };
    return (  
        <div>
           
<h1>Event List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Date</th>
            <th>Location</th>
            <th>Attendees</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.name}</td>
              <td>{event.description}</td>
              <td>{new Date(event.date).toLocaleString()}</td>
              <td>{event.location}</td>
              <td>{event.attendees}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    );
}

export default Event;