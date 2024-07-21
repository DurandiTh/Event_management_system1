package com.example.demo.service;

import com.example.demo.model.Event;
import com.example.demo.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public Event getEventById(Long id) throws ResourceNotFoundException {
        return eventRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Event not found with id " + id));
    }


    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }



    //now
//    public Event updateEvent(Long id, Event updatedEvent) {
//        Optional<Event> existingEventOptional = eventRepository.findById(id);
//        if (existingEventOptional.isPresent()) {
//            Event existingEvent = existingEventOptional.get();
//            existingEvent.setName(updatedEvent.getName());
//            existingEvent.setDescription(updatedEvent.getDescription());
//            existingEvent.setDate(updatedEvent.getDate());
//            existingEvent.setLocation(updatedEvent.getLocation());
//            existingEvent.setAttendees(updatedEvent.getAttendees());
//            return eventRepository.save(existingEvent);
//        } else {
//            throw new RuntimeException("Event not found with id: " + id);
//        }
//    }

    public Event updateEvent(Long id, Event eventDetails) {
        Optional<Event> optionalEvent = eventRepository.findById(id);
        if (optionalEvent.isPresent()) {
            Event event = optionalEvent.get();
            event.setName(eventDetails.getName());
            event.setDescription(eventDetails.getDescription());
            event.setDate(eventDetails.getDate());
            event.setLocation(eventDetails.getLocation());
            return eventRepository.save(event);
        } else {
            throw new RuntimeException("Event not found with id " + id);
        }
    }
//now
    public void deleteEvent(Long id) {
        if (eventRepository.existsById(id)) {
            eventRepository.deleteById(id);
        } else {
            throw new RuntimeException("Event not found with id: " + id);
        }
    }


}
