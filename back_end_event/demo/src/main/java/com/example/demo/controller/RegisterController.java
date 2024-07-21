package com.example.demo.controller;


import com.example.demo.model.Attendee;
import com.example.demo.model.Event;
import com.example.demo.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="api/users")
@CrossOrigin("http://localhost:3000")
public class RegisterController {

    @Autowired
    private RegisterService registerService;
    @GetMapping("/getusers")
    public ResponseEntity<List<Attendee>> getAllEvents() {
        List<Attendee> attendees = registerService.getAllEvents();
        return ResponseEntity.ok(attendees);


    }


    @PostMapping("/saveUser")
    public ResponseEntity<Attendee> createEvent(@RequestBody Attendee attendee) {
        Attendee newAttendee = registerService.createEvent(attendee);
        return ResponseEntity.ok(newAttendee);
    }
}
