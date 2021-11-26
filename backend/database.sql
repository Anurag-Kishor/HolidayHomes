CREATE TABLE Role (
    Role_id SERIAL PRIMARY KEY,
    Role_Name varchar(50) NOT NULL UNIQUE
);


CREATE TABLE Users (
    User_id SERIAL PRIMARY KEY,
    Role_id INT NOT NULL,
    Email varchar(40) NOT NULL UNIQUE,
    Password varchar(64) NOT NULL,
    CONSTRAINT fk_Role 
        FOREIGN KEY(Role_id) 
        REFERENCES Role(Role_id)
        ON DELETE CASCADE
);

CREATE TABLE Location (
    Location_id SERIAL PRIMARY KEY,
    City varchar(50) NOT NULL,
    State varchar(50) NOT NULL,
    Country varchar(50) NOT NULL
);

CREATE TABLE Traveler (
    Traveler_id INT NOT NULL UNIQUE,
    FirstName varchar(50) NOT NULL,
    LastName varchar(50) NOT NULL,
    PhoneNumber numeric(10, 0) NOT NULL UNIQUE,
    AddressLine1 varchar(100) NOT NULL,
    AddressLine2 varchar(100),
    Location_id INT,
    CONSTRAINT fk_users
        FOREIGN KEY(Traveler_id)
        REFERENCES Users(User_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_location
        FOREIGN KEY(Location_id)
        REFERENCES Location(Location_id)
        ON DELETE CASCADE
    
);

CREATE TABLE Host (
    Host_id INT NOT NULL UNIQUE,
    FirstName varchar(50) NOT NULL,
    LastName varchar(50) NOT NULL,
    PhoneNumber numeric(10, 0) NOT NULL UNIQUE,
    AddressLine1 varchar(100) NOT NULL,
    AddressLine2 varchar(100),
    Location_id INT,
    CONSTRAINT fk_users
        FOREIGN KEY(Host_id)
        REFERENCES Users(User_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_location
        FOREIGN KEY(Location_id)
        REFERENCES Location(Location_id)
        ON DELETE CASCADE
    
);

CREATE TABLE Rental_Type (
    Type_id SERIAL PRIMARY KEY,
    Name varchar(30) NOT NULL
);

CREATE TABLE Services (
    Service_id SERIAL PRIMARY KEY,
    Description varchar(30) NOT NULL
); 

CREATE TABLE Rental (
    Rental_id SERIAL PRIMARY KEY,
    Name varchar(50) NOT NULL,
    Description varchar(100),
    AddressLine1 varchar(100) NOT NULL,
    AddressLine2 varchar(100),
    Location_id INT NOT NULL,
    Available boolean NOT NULL,
    dateFrom DATE NOT NULL,
    dateTo Date NOT NULL,
    verified boolean NOT NULL,
    pricePerDay numeric(10, 4) NOT NULL,
    rentalType INT NOT NULL,
    numberOfRooms INT NOT NULL,
    numberOfGuests INT NOT NULL,
    host_id INT NOT NULL,
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
        REFERENCES Host(Host_id)
        ON DELETE CASCADE
);

CREATE TABLE Host_Rentals (
    Rental_id INT NOT NULL,
    Host_id INT NOT NULL,
    CONSTRAINT fk_rentalid
        FOREIGN KEY(Rental_id)
        REFERENCES Rental(Rental_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_hostid
        FOREIGN KEY(Host_id)
        REFERENCES Host(Host_id)
        ON DELETE CASCADE
);

CREATE TABLE Rental_Services (
    Service_id INT NOT NULL,
    Rental_id INT NOT NULL,
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
    User_id INT NOT NULL,
    Rental_id INT NOT NULL,
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

DROP TABLE traveler;

DROP TABLE Rental_Services;
DROP TABLE Host_rentals;
DROP TABLE Rental_Reviews;
DROP TABLE rental;
DROP TABLE rental_type;
DROP TABLE services;
DROP TABLE host;
DROP TABLE location;
DROP TABLE users;