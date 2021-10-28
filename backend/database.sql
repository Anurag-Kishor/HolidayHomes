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
DROP TABLE traveler;
DROP TABLE location;
DROP TABLE users;