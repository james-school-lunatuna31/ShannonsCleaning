# Software Design Document for Shannon's Cleaning Service

## 1. Introduction
### Purpose
Develop a website for Shannon's Cleaning Service (SCS) that displays service information, allows user login to view pricing after evaluations by the Admin Team (AT), and provides an admin panel for additional configurations and management.

### Scope
The application includes:
- User dashboard and account modification features (contact, address, square footage, booking history)
- Information-only pages about available cleaning services
- An admin panel for the AT to manage client accounts and pricing.

### Definitions, Acronyms, and Abbreviations
- SCS: Shannon's Cleaning Service
- AT: Admin Team (consisting of Shannon)
- TT: Tech Team (consisting of myself/ckplace programs)
- Consults: Prospective clients
- Bookings: One-off client cleanings
- Clients: Individuals or businesses creating bookings
- Partners: Contract-bound cleaning service obligations

## 2. Overall Description
### Product Perspective
This system is standalone and manages all aspects of the service internally without external integrations.

### Product Functions
- User registration and authentication
- Display of service information
- Account management for clients and the AT
- Data storage and management

### User Characteristics
- AT and TT for system management and updates
- Customers (clients and partners) for service bookings and account management

### Constraints
- The system will not handle payments or integrate with external services.
- All operations and data management are conducted locally.

## 3. System Features
### User Registration and Account Management
- **Functional Requirements**: Secure registration and login with MFA, account creation and management handled by AT and TT.

### Admin Panel
- **Functional Requirements**: Enable AT to manage user accounts, set and adjust pricing based on evaluations, and manage booking details.

### Information Display
- **Functional Requirements**: Static pages managed by TT to inform clients and partners about services and pricing. Prices adjusted based on square footage and evaluations.

## 4. External Interface Requirements
### User Interfaces
- Detailed account management interfaces for users and AT.
- Information-only interfaces for service details.

### Software Interfaces
- **Database**: PostgreSQL hosted on render.com

### Communications Interfaces
- All communication over HTTPS.

## 5. Other Nonfunctional Requirements
### Performance Requirements
- The application should feature nearly instant load times.

### Security Requirements
- MFA for all user and admin accounts.

### Software Quality Attributes
- Minimal maintenance required, designed for reliability and ease of use.

## 6. System Models
- **(To be developed)** System architecture and data flow diagrams will be prepared in the next stages of development.

## 7. Appendices
- **(Not applicable)**

## 8. Index
- **(Auto-generated)**
