import { Typography } from "@mui/material";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import resortPhoto from "../assets/pixabay_maldives-1200.jpg";

const HostelRentalBookingListItem = (props) => {
  return (
    <Row className="row__allow__gutter px-5 pb-2">
      <Col
        md={3}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Image src={resortPhoto} height="80" thumbnail />
      </Col>
      <Col md={9}>
        <Row className="row__allow__gutter">
          <Col md={12}>
            <Typography variant="body1" align="left">
              {props.bookingName}
            </Typography>
          </Col>
        </Row>
        <Row className="row__allow__gutter">
          <Col md={8}>
            <Typography variant="body1" align="left">
              {props.bookingEmail}
            </Typography>
          </Col>
          <Col md={4}>
            <Typography variant="body1" align="right">
              {props.bookingPhoneNumber}
            </Typography>
          </Col>
        </Row>
        <Row className="row__allow__gutter pt-1">
          <Col md={8}>
            <Typography variant="body2" align="left">
              {props.startDate} - {props.endDate}
            </Typography>
          </Col>
          <Col md={4}>
            <Typography variant="body2" align="right">
              Rs. {props.totalCost}
            </Typography>
          </Col>
        </Row>
        <Row className="pt-1">
          <Col md={{ span: 4 }} className="apply__borders__5">
            <Typography variant="body2" align="center">
              {props.totalRooms} ROOM
            </Typography>
          </Col>
          <Col md={{ span: 4, offset: 1 }} className="apply__borders__5">
            <Typography variant="body2" align="center">
              {props.totalGuests} GUESTS
            </Typography>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default HostelRentalBookingListItem;
