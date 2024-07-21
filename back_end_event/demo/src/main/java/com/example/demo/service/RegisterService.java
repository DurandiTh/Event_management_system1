package com.example.demo.service;


import com.example.demo.model.Attendee;

import com.example.demo.repository.AttendeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegisterService {

    @Autowired
    private AttendeeRepository attendeeRepository;

    public List<Attendee> getAllEvents() {
        return attendeeRepository.findAll();
    }

    public Attendee createEvent(Attendee attendee) {
        return attendeeRepository.save(attendee);
    }
}
