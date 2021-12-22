import React, { useEffect, useCallback, useState } from "react";
import {
  Col,
  Image,
  Navbar,
  Row,
  Button,
  Card,
  Container,
} from "react-bootstrap";
import InputField from "../Components/InputField";
import SearchCardNavbar from "../Components/SearchCardNavbar";
import logo from "../assets/hhlogo.png";
import "../assets/css/main.css";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import RentalCard from "../Components/RentalCard";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import ReviewDiv from "../Components/ReviewDiv";
import { useDispatch, useSelector } from "react-redux";
import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";

function SearchScreen() {
  const dispatch = useDispatch();
  const getUser = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const locationRouter = useLocation();

  //Search Fields
  const [location, setLocation] = useState([]);
  const [selectedLocationSt, setSelectedLocationSt] = useState("");
  const [checkInDateSt, setCheckInDateSt] = useState("");
  const [checkOutDateSt, setCheckOutDateSt] = useState("");
  const [noOfGuestsSt, setNoOfGuestsSt] = useState("");
  const searchFields = {
    checkInDate: checkInDateSt,
    setCheckInDate: setCheckInDateSt,
    checkOutDate: checkOutDateSt,
    setCheckOutDate: setCheckOutDateSt,
    noOfGuests: noOfGuestsSt,
    setNoOfGuests: setNoOfGuestsSt,
  };

  const bindParams = useCallback(async () => {
    if (locationRouter.state.selectedLocation !== "")
      setSelectedLocationSt(locationRouter.state.selectedLocation);
    if (locationRouter.state.checkInDate !== "")
      setCheckInDateSt(locationRouter.state.checkInDate);
    if (locationRouter.state.checkOutDate !== "")
      setCheckOutDateSt(locationRouter.state.checkOutDate);
    if (locationRouter.state.noOfGuests !== "")
      setNoOfGuestsSt(locationRouter.state.noOfGuests);

    console.log(selectedLocationSt, checkInDateSt, checkOutDateSt);
  }, []);

  useEffect(() => {
    bindParams();
  }, []);
  return (
    <>
      {/* Cover Photo - Search Form - Navbar */}
      {/* <SearchCardNavbar /> */}
      <Row className="px-0 pt-5 row__allow__gutter">
        <Col md={3}>
          <h2 style={{ color: "#ff6666" }}>Search Title Goes Here</h2>{" "}
        </Col>
      </Row>
      <Row className="px-5 mb-5 row__allow__gutter">
        <Col>
          <RentalCard />
        </Col>
        <Col>
          <RentalCard />
        </Col>
        <Col>
          <RentalCard />
        </Col>
      </Row>

      {/* footer */}
      <Row className="row__allow__gutter pt-4">
        <Col>
          <Footer />
        </Col>
      </Row>
    </>
  );
}
export default SearchScreen;
