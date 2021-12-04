import { Divider, List, ListItem } from "@mui/material";
import React from "react";
import "../assets/css/main.css";
import HostelRentalBookingListItem from "./HostRentalBookingListItem";

const HostRentalBookingList = () => {
  return (
    <List style={{ width: "100%", maxHeight: "265px", overflowY: "auto" }}>
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
    </List>
  );
};

export default HostRentalBookingList;
