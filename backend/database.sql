CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE Role (
    Role_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    Role_Name varchar(50) NOT NULL UNIQUE
);

CREATE TABLE Location (
    Location_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    City varchar(50) NOT NULL,
    State varchar(50) NOT NULL,
    Country varchar(50) NOT NULL
);

CREATE TABLE Users (
    User_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    Role_id uuid,
    Email varchar(40) NOT NULL UNIQUE,
    Password varchar(64) NOT NULL,
    FirstName varchar(50) NOT NULL,
    LastName varchar(50) NOT NULL,
    PhoneNumber numeric(10, 0) NOT NULL UNIQUE,
    AddressLine1 varchar(100) NOT NULL,
    AddressLine2 varchar(100),
    Location_id uuid NOT NULL,
    isHost BOOLEAN NOT NULL DEFAULT 'f',
    CONSTRAINT fk_Role 
        FOREIGN KEY(Role_id) 
        REFERENCES Role(Role_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_location
        FOREIGN KEY(Location_id)
        REFERENCES Location(Location_id)
        ON DELETE CASCADE
);


CREATE TABLE Rental_Type (
    Type_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    Name varchar(30) NOT NULL
);

INSERT INTO Rental_Type(name) VALUES ('Bungalow');
INSERT INTO Rental_Type(name) VALUES ('Villa');
INSERT INTO Rental_Type(name) VALUES ('Flat');



CREATE TABLE Services (
    Service_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    Description varchar(30) NOT NULL
); 

INSERT INTO Services(Description) VALUES ('Air Condition');
INSERT INTO Services(Description) VALUES ('Gym');
INSERT INTO Services(Description) VALUES ('Breakfast');
INSERT INTO Services(Description) VALUES ('TV');
INSERT INTO Services(Description) VALUES ('Washing Machine');
INSERT INTO Services(Description) VALUES ('Wifi');
INSERT INTO Services(Description) VALUES ('Smoke Alarms');
INSERT INTO Services(Description) VALUES ('Heating');
INSERT INTO Services(Description) VALUES ('Hair Dryer');
INSERT INTO Services(Description) VALUES ('Security Cameras');




CREATE TABLE Rental (
    Rental_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    Name varchar(50) NOT NULL,
    Description varchar(100),
    AddressLine1 varchar(100) NOT NULL,
    AddressLine2 varchar(100),
    Location_id uuid NOT NULL,
    Available boolean NOT NULL,
    dateFrom DATE NOT NULL,
    dateTo Date NOT NULL,
    verified boolean NOT NULL,
    pricePerDay numeric(10, 4) NOT NULL,
    rentalType uuid NOT NULL,
    numberOfRooms INT NOT NULL,
    numberOfGuests INT NOT NULL,
    host_id uuid NOT NULL,
    numberOfBeds INT,
    time timestamp NOT NULL DEFAULT NOW(),
    CONSTRAINT fk_rentalType
        FOREIGN KEY(rentalType)
        REFERENCES Rental_Type(Type_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_location
        FOREIGN KEY(Location_id)
        REFERENCES Location(Location_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_hostid
        FOREIGN KEY(Host_id)
        REFERENCES Users(User_id)
        ON DELETE CASCADE
);

CREATE TABLE Host_Rentals (
    Rental_id uuid,
    Host_id uuid NOT NULL,
    CONSTRAINT fk_rentalid
        FOREIGN KEY(Rental_id)
        REFERENCES Rental(Rental_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_hostid
        FOREIGN KEY(Host_id)
        REFERENCES Users(User_id)
        ON DELETE CASCADE
);

CREATE TABLE Rental_Services (
    Service_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    Rental_id uuid NOT NULL,
    CONSTRAINT fk_serviceid
        FOREIGN KEY(Service_id)
        REFERENCES Services(Service_id)
        ON DELETE CASCADE,
     CONSTRAINT fk_rentalid
        FOREIGN KEY(Rental_id)
        REFERENCES Rental(Rental_id)
        ON DELETE CASCADE
);


CREATE TABLE Rental_Reviews (
    User_id uuid NOT NULL,
    Rental_id uuid NOT NULL,
    Description varchar(200),
    stars numeric(5) NOT NULL,
    CONSTRAINT fk_userid
        FOREIGN KEY(User_id)
        REFERENCES Users(User_id)
        ON DELETE CASCADE,
     CONSTRAINT fk_rentalid
        FOREIGN KEY(Rental_id)
        REFERENCES Rental(Rental_id)
        ON DELETE CASCADE
);

CREATE TABLE Booking (
    Booking_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    Rental_id uuid NOT NULL,
    Trip_start_date DATE NOT NULL,
    Trip_end_date DATE NOT NULL,
    NumberOfTravellers INT NOT NULL,
    TripCost numeric(10,4) NOT NULL,
    Booking_date DATE NOT NULL,
    Traveler_id uuid NOT NULL,
    CONSTRAINT fk_rentalid
        FOREIGN KEY(Rental_id)
        REFERENCES Rental(Rental_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_travelerid
        FOREIGN KEY(Traveler_id)
        REFERENCES Users(User_id)
        ON DELETE CASCADE
);


DROP TABLE Rental_Services;
DROP TABLE Host_rentals;
DROP TABLE Rental_Reviews;
DROP TABLE Rental_Services;
DROP TABLE Booking;
DROP TABLE rental;
DROP TABLE rental_type;
DROP TABLE users;
DROP TABLE role;
DROP TABLE services;
DROP TABLE location;
