package com.example.demo.controller;


import com.example.demo.model.Event;
import com.example.demo.service.EventService;
import com.example.demo.service.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="api/events")
@CrossOrigin("http://localhost:3000")
public class EventController {

    @Autowired
    private EventService eventService;

    @GetMapping("/getevents")
    public ResponseEntity<List<Event>> getAllEvents() {
        List<Event> events = eventService.getAllEvents();
        return ResponseEntity.ok(events);


    }

    @GetMapping("/getEvent/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable Long id) throws ResourceNotFoundException {
        Event event = eventService.getEventById(id);
        return ResponseEntity.ok(event);
    }

    @PostMapping("/saveEvent")
    public ResponseEntity<Event> createEvent(@RequestBody Event event) {
        Event newEvent = eventService.createEvent(event);
        return ResponseEntity.ok(newEvent);
    }

    @PutMapping("/updateUser/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable Long id, @RequestBody Event updatedEvent) {


        Event event = eventService.updateEvent(id, updatedEvent);
        return ResponseEntity.ok(event);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Long id) {
        eventService.deleteEvent(id);
        return ResponseEntity.noContent().build();
    }

}
