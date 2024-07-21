# Event Management System

## Introduction
This application is an Event Management System built with React for the frontend, Spring Boot for the backend, and MySQL for the database.

## Features
- Fetch all events.
- Add a new event.
- Update event details.
- Delete an event by its ID.
- Register an attendee to an event.

## Technologies
- Frontend: React
- Backend: Spring Boot (Java)
- Database: MySQL

## Prerequisites
- Node.js (v14 or later)
- Java Development Kit (JDK 11 or later)
- MySQL
- Maven

## Setup Instructions

### Backend



   Configure MySQL:
   Create a database in MySQL:CREATE DATABASE event_management;


   Update src/main/resources/application.properties with your MySQL credentials:
   spring.application.name=demo
   spring.jpa.hibernate.ddl-auto=update
 
    spring.datasource.url=jdbc:mysql://localhost:3306/event_management?createDatabaseIfNotExist=true
    spring.datasource.username=root
    spring.datasource.password=password
    spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
    spring.jpa.show.sql=true
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect

 The backend server should now be running on http://localhost:8080.


 Frontend
 Navigate to the frontend directory:cd ../frontend
 Install dependencies:npm install
 Configure the frontend to communicate with the backend:
 Start the frontend:npm start

 
 
 Open browser and navigate to http://localhost:3000.


 

   
