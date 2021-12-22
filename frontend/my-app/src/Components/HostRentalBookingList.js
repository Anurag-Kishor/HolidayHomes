import { Divider, List, ListItem, Typography } from "@mui/material";
import React, { useState, useCallback, useEffect } from "react";
import "../assets/css/main.css";
import HostelRentalBookingListItem from "./HostRentalBookingListItem";

const HostRentalBookingList = (props) => {
  const [bookingsSt, setBookings] = useState([]);
  const getBookings = useCallback(async () => {
    setBookings(await props.bookings);
    console.log(props.bookings);
    console.log(props);
  }, []);

  useEffect(() => {
    getBookings();
  }, []);

  return (
    <List style={{ width: "100%", maxHeight: "265px", overflowY: "auto" }}>
      {bookingsSt !== undefined ? (
        bookingsSt !== null &&
        bookingsSt.map((booking, index) => {
          return (
            <div key={booking.booking_id}>
              <ListItem>
                <HostelRentalBookingListItem
                  bookingName={booking.firstname + " " + booking.lastname}
                  bookingEmail={booking.email}
                  bookingPhoneNumber={booking.phonenumber}
                  startDate={booking.trip_start_date}
                  endDate={booking.trip_end_date}
                  totalCost={booking.tripcost}
                  totalRooms="20"
                  totalGuests={booking.numberoftravellers}
                />
              </ListItem>
              {index < bookingsSt.length - 1 ? (
                <Divider variant="inset" component="li" />
              ) : null}
            </div>
          );
        })
      ) : (
        <Typography>No bookings yet!</Typography>
      )}

      {/* <ListItem>
        <HostelRentalBookingListItem
          bookingName="TITLE GOES HERE"
          bookingEmail="testtesttesttest@gmail.com"
          bookingPhoneNumber="1234567890"
          startDate="2020-12-03"
          endDate="2020-12-05"
          totalCost="4200"
          totalRooms="1"
          totalGuests="2"
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <HostelRentalBookingListItem
          bookingName="TITLE GOES HERE"
          bookingEmail="testtesttesttest@gmail.com"
          bookingPhoneNumber="1234567890"
          startDate="2020-12-03"
          endDate="2020-12-05"
          totalCost="4200"
          totalRooms="1"
          totalGuests="2"
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <HostelRentalBookingListItem
          bookingName="TITLE GOES HERE"
          bookingEmail="testtesttesttest@gmail.com"
          bookingPhoneNumber="1234567890"
          startDate="2020-12-03"
          endDate="2020-12-05"
          totalCost="4200"
          totalRooms="1"
          totalGuests="2"
        />
      </ListItem> */}
    </List>
  );
};

export default HostRentalBookingList;
