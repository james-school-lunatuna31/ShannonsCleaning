# Software Design Document for Shannon's Cleaning Service

## 1. Introduction

### Purpose

Develop a comprehensive website for Shannon's Cleaning Service that facilitates service browsing, user-specific pricing access after evaluations, and efficient administrative management.

### Scope

The application will encompass user registration, a user dashboard, information pages about services, and an admin panel for account and pricing management.

### Definitions, Acronyms, and Abbreviations

- **SCS**: Shannon's Cleaning Service
- **AT**: Admin Team (consisting of Shannon and other sponsors)
- **TT**: Tech Team (consisting of myself)
- **Consults**: Prospective clients
- **Bookings**: Scheduled cleaning appointments
- **Clients**: Service users
- **Partners**: Affiliated service providers

## 2. Project Proposal Integration

### Project Name

SCS Web Portal

### Team Members and Contact Information

- **James Green**, Shannon
- **james@ckplace.org**
- **(347) 578-5250**

### Abstract/Proposal Summary

This project aims to create a user-friendly, secure online platform that allows efficient management of client accounts and service bookings for Shannon's Cleaning Service.

### Background and Justification

- Moderate existing knowledge in web development, enhancing this with a specific focus on service management for cleaning services.
- The need for a tailored platform that supports both administrative functions and customer interactions efficiently.

## 3. Overall Description

### Product Perspective

The system is designed to operate independently with no external data dependencies or integrations.

### Product Functions

Detailed functionalities include user registration, login, service information display, and comprehensive account management for both clients and the admin team.

### User Characteristics

Differentiated access for the Admin Team (AT) and the Tech Team (TT) to ensure operational control and system updates (note TT teams will handle modifications without a portal. I.E. affecting deployment items. AT teams will use a portal), respectively. Clients and partners interact primarily through service booking and account functionalities.

### Constraints

The application will exclusively manage non-financial data and user interactions, without integrating payment processing capabilities.

## 4. System Features

### User Registration and Account Management

- **SCS-R001**: Secure user registration and login process with multi-factor authentication (MFA).
- **SCS-R002**: User account management facilitated by the AT with provisions for updating contact information, booking history, and service evaluations.

### Admin Panel

- **SCS-R003**: Tools for the AT to adjust service pricing dynamically based on user evaluations and predefined criteria.
- **SCS-R004**: Management of user accounts and detailed tracking of service bookings and client interactions.

### Information Display

- **SCS-R005**: Static pages providing detailed information on available services, tailored to different user demographics (clients vs. partners).

### Stretch Requirements (Optional Enhancements)

- **SCS-R006**: Integration with external calendar services for scheduling.
- **SCS-R007**: Integration with an external service such a Stripe for billing. (not planned as requested by Sponsor)
- **SCS-R008**: Booking through the site and auto calender management.

## 5. External Interface Requirements

### User Interfaces

Design user-friendly, intuitive interfaces for both clients and the Admin Team, supporting easy navigation and efficient task completion.

### Software Interfaces

Database: Utilize PostgreSQL for robust data management, hosted on Render.com.

### Communications Interfaces

Ensure all application interactions occur over secure HTTPS connections.

## 6. Other Nonfunctional Requirements

### Performance Requirements

Optimize the web application for performance, aiming for minimal load times and smooth user interactions.

### Security Requirements

Implement comprehensive security measures including MFA and regular security audits to safeguard user data and system integrity.

### Software Quality Attributes

The system should be reliable, requiring minimal maintenance, with a focus on user-friendly design and operational stability.

## 7. System Models

### Data at Rest

Client data, including profiles and booking history, stored in encrypted format in PostgreSQL.

### Data on the Wire

All data transmissions secured via HTTPS.

### Data State

Use of state management tools like Redux to manage application state across different user interactions.

### HMI/HCI/GUI

Detailed mock-ups of user interfaces ensuring the application is user-friendly and intuitive.

## 8. Verification and Testing

### Demo

Demonstrate all functionalities during a live session using test cases that cover all requirements.

### Testing

Functionally test each feature (SCS-R001 to R005) to ensure it works as intended. User feedback and beta testing for additional features (SCS-R006 and R008).

## 9. Appendices

(Not applicable)

## 10. Index

(Not applicable at this time)
