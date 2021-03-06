import React, { useEffect, useState, useCallback } from "react";
import {
  fetchNewestAdditions,
  fetchMostBooked,
  fetchAvgAndCountReviews,
} from "../app/Actions/appActions";
import { Col, Image, Navbar, Row, Button, Container } from "react-bootstrap";
import logo from "../assets/hhlogo.png";
import testimonial1 from "../assets/1.png";
import testimonial2 from "../assets/2.png";
import testimonial3 from "../assets/3.png";
import "../assets/css/main.css";
import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";
import SearchCardNavbar from "../Components/SearchCardNavbar";
import { Carousel } from "react-responsive-carousel";
import "../assets/css/carousel.min.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import abus from "../assets/4.png";
import Footer from "../Components/Footer";
import RentalCard from "../Components/RentalCard";
import InputField from "../Components/InputField";
import ReviewDiv from "../Components/ReviewDiv";
import { fetchAddresses } from "../app/Actions/hostActions";

function HomeScreen() {
  const dispatch = useDispatch();
  const getUser = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const [newestAdditions, setNewestAdditions] = useState([]);
  const [mostBooked, setMostBooked] = useState([]);

  //Search Fields
  const [location, setLocation] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();
  const [noOfGuests, setNoOfGuests] = useState("");
  const searchFields = {
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
    noOfGuests,
    setNoOfGuests,
  };

  const homeScreenData = useCallback(async () => {
    const userAccessToken = await getUser.accessToken;
    setNewestAdditions(await dispatch(fetchNewestAdditions(userAccessToken)));
    setMostBooked(await dispatch(fetchMostBooked(userAccessToken)));
    setLocation(await dispatch(fetchAddresses(userAccessToken)));
  }, []);

  useEffect(() => {
    if (getUser === null) {
      return navigate("/signup");
    }
    homeScreenData();
  }, [getUser]);

  const searchFunc = () => {
    navigate("/search", {
      state: {
        selectedLocation,
        checkInDate,
        checkOutDate,
        noOfGuests,
      },
    });
  };

  return (
    <>
      {/* Cover Photo - Search Form - Navbar */}
      <SearchCardNavbar
        location={location}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        searchFields={searchFields}
        searchFunc={searchFunc}
      />

      {/* Newest Additions */}
      <Row className="px-0 pt-5 row__allow__gutter">
        <Col md={2}>
          <h4>Most Booked</h4>{" "}
        </Col>
        <Col md={{ span: 2, offset: 8 }}>
          <Row>
            <h5>See All</h5>
          </Row>
        </Col>
      </Row>
      <Row className="px-5 mb-3 row__allow__gutter">
        {mostBooked.length === 0 && <Typography>No bookings yet!</Typography>}
        {mostBooked.map((mostBookedElement, index) => {
          return index <= 2 ? (
            <Col key={mostBookedElement.rental_id} md={4}>
              <RentalCard
                rental_id={mostBookedElement.rental_id}
                name={mostBookedElement.name}
                pricePerDay={parseFloat(mostBookedElement.priceperday)}
                noOfRooms={mostBookedElement.numberofrooms}
                noOfGuests={mostBookedElement.numberofguests}
              />
            </Col>
          ) : null;
        })}
      </Row>

      {/* Newly Added */}
      <Row className="px-0 pt-5 row__allow__gutter">
        <Col md={2}>
          <h4>Newly Added</h4>{" "}
        </Col>
        <Col md={{ span: 2, offset: 8 }}>
          <Row>
            <button>See All</button>
          </Row>
        </Col>
      </Row>
      <Row className="px-5 mb-5 row__allow__gutter">
        {newestAdditions.length === 0 && (
          <Typography>No New Rentals!</Typography>
        )}
        {newestAdditions.map((newestAddition, index) => {
          return index <= 2 ? (
            <Col key={newestAddition.rental_id} md={4}>
              <RentalCard
                rental_id={newestAddition.rental_id}
                name={newestAddition.name}
                pricePerDay={parseFloat(newestAddition.priceperday)}
                noOfRooms={newestAddition.numberofrooms}
                noOfGuests={newestAddition.numberofguests}
              />
            </Col>
          ) : null;
        })}
      </Row>

      {/* Testimonials */}
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <ReviewDiv />
        <ReviewDiv />
        <ReviewDiv />
      </Carousel>

      {/* About Us */}
      <img
        src={abus}
        height="500"
        className="mt-5"
        style={{ paddingLeft: "300px" }}
      />
      {/* Footer */}
      <Row className="row__allow__gutter pt-4">
        <Col>
          <Footer />
        </Col>
      </Row>
    </>
  );
}

export default HomeScreen;
