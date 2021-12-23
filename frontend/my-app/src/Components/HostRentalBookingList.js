import { Divider, List, ListItem, Typography } from "@mui/material";
import React, { useState, useCallback, useEffect } from "react";
import "../assets/css/main.css";
import HostelRentalBookingListItem from "./HostRentalBookingListItem";

const HostRentalBookingList = ({ bookingsSt }) => {
  // const [bookingsSt, setBookings] = useState([]);
  // const getBookings = useCallback(async () => {
  //   setBookings(await props.bookings);
  //   console.log(props.bookings);
  // }, []);

  // useEffect(() => {
  //   getBookings();
  // }, []);

  return (
    <List style={{ width: "100%", maxHeight: "265px", overflowY: "auto" }}>
      {bookingsSt !== undefined &&
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
        })}
    </List>
  );
};

export default HostRentalBookingList;
