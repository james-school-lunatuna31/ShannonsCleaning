-- SCRIPT TO CREATE THE DATABASE ONLY RUN IF YOU SCREW UP
-- Drop tables if they exist
DROP TABLE IF EXISTS Partner_Account;
DROP TABLE IF EXISTS Admin_Account;
DROP TABLE IF EXISTS Requests;
-- Create Partner_Account table
CREATE TABLE Partner_Account (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    mfa_secret VARCHAR(255) DEFAULT NULL,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    primary_email VARCHAR(255) NOT NULL,
    primary_name VARCHAR(255) NOT NULL,
    primary_phone VARCHAR(20) NOT NULL,
    square_footage INT DEFAULT NULL,
    quoted_price INT DEFAULT NULL
);
-- Create Admin_Account table
CREATE TABLE Admin_Account (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    mfa_secret VARCHAR(255) DEFAULT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL
);
-- Create Requests table
CREATE TABLE Requests (
    id INT SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    square_footage INT NOT NULL,
    primary_email VARCHAR(255) NOT NULL,
    primary_name VARCHAR(255) NOT NULL,
    primary_phone VARCHAR(20) NOT NULL,
    poll VARCHAR(255) DEFAULT NULL
);
-- Insert the first admin record
INSERT INTO Admin_Account (password, name, email, phone)
VALUES (
        'test_for_now',
        'Shannon',
        'shannons_cleaning_test@ckplace.org',
        '3475785250'
    );