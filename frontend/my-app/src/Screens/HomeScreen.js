import React, { useEffect } from "react";
import { Col, Image, Navbar, Row, Button, Container } from "react-bootstrap";
import logo from "../assets/hhlogo.png";
import testimonial1 from "../assets/1.png";
import testimonial2 from "../assets/2.png";
import testimonial3 from "../assets/3.png";
import "../assets/css/main.css";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";
import { Carousel } from "react-responsive-carousel";
import "../assets/css/carousel.min.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import abus from "../assets/4.png";
import Footer from "../Components/Footer";
import RentalCard from "../Components/RentalCard";
import InputField from "../Components/InputField";
import ReviewDiv from "../Components/ReviewDiv";

function HomeScreen() {
  const getUser = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (getUser === null) {
      navigate("/signup");
      console.log("CALLING");
    } else {
      console.log(getUser);
    }
  }, [getUser]);

  return (
    <>
      {/* Cover Photo - Search Form - Navbar */}
      <Row
        className="cover-photo-home row__allow__gutter"
        style={{ textAlign: "left" }}
      >
        <Col>
          {/* Navbar */}
          <Row>
            <Navbar>
              <Container>
                <Navbar.Brand>
                  <Link to="/">
                    <Image src={logo} height="100" />
                  </Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                  <Link to="/become-a-host" style={{ textDecoration: "none" }}>
                    <Navbar.Text
                      className="p-5 h5"
                      style={{ color: "#ff6666" }}
                    >
                      Become a Host
                    </Navbar.Text>
                  </Link>
                  <Link to="/me" style={{ textDecoration: "none" }}>
                    <Navbar.Text
                      className="p-5 h5"
                      style={{ color: "#ff6666" }}
                    >
                      Me
                    </Navbar.Text>
                  </Link>
                  <Link to="/signin" style={{ textDecoration: "none" }}>
                    <Navbar.Text
                      className="p-5 h5"
                      style={{ color: "#ff6666" }}
                    >
                      Logout
                    </Navbar.Text>
                  </Link>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Row>

          {/* Search Form */}
          <Row className="row__allow__gutter">
            <Col
              md={{ span: 4, offset: 3 }}
              style={{
                backgroundColor: "#e5e5e5",
                height: "60vh",
                borderRadius: 15,
              }}
              className="p-5"
            >
              <Row className="mb-3 row__allow__gutter">
                <h4 style={{ textAlign: "center", color: "#ff6666" }}>
                  Explore Gujarat!
                </h4>
                <br />
                <h5>
                  Rent suitable homes and experience your trips at an affordable
                  cost.
                </h5>
              </Row>
              {/* Where Field */}
              <Row className="row__allow__gutter">
                <h5>Where</h5>
              </Row>
              <Row
                style={{
                  backgroundColor: "white",
                  borderRadius: 12,
                  height: "7vh",
                }}
                className="align-items-center mb-3 row__allow__gutter"
              >
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <TextField
                    id="input-with-sx"
                    label="Location"
                    variant="standard"
                    color="warning"
                    fullWidth
                  />
                  <AddLocationAltRoundedIcon
                    sx={{
                      color: "action.active",
                      mr: 1,
                      my: 0.5,
                      fontSize: 30,
                    }}
                  />
                </Box>
              </Row>

              {/* Check In Field - Check Out Field */}
              <Row className="row__allow__gutter">
                <Col md={3}>
                  <h5>Check In</h5>
                </Col>
                <Col md={{ span: 3, offset: 4 }}>
                  <h5>Check Out</h5>
                </Col>
              </Row>
              <Row className="align-items-center mb-3 row__allow__gutter">
                <Col
                  md={5}
                  style={{
                    backgroundColor: "white",
                    borderRadius: 12,
                    height: "7vh",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <TextField
                      id="input-with-sx"
                      label="Check-in Date"
                      variant="standard"
                      color="warning"
                      fullWidth
                    />
                    <EventNoteRoundedIcon
                      sx={{
                        color: "action.active",
                        mr: 1,
                        my: 0.5,
                        fontSize: 30,
                      }}
                    />
                  </Box>
                </Col>
                <Col
                  md={{ span: 5, offset: 2 }}
                  style={{
                    backgroundColor: "white",
                    borderRadius: 12,
                    height: "7vh",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <TextField
                      id="input-with-sx"
                      label="Check-out-date"
                      variant="standard"
                      color="warning"
                      fullWidth
                    />
                    <EventNoteRoundedIcon
                      sx={{
                        color: "action.active",
                        mr: 1,
                        my: 0.5,
                        fontSize: 30,
                      }}
                    />
                  </Box>
                </Col>
              </Row>

              {/* Guest Field */}
              <Row className="row__allow__gutter">
                <h5>Guest</h5>
              </Row>
              <Row
                style={{
                  backgroundColor: "white",
                  borderRadius: 12,
                  height: "7vh",
                }}
                className="align-items-center mb-3 row__allow__gutter"
              >
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <TextField
                    id="input-with-sx"
                    label="Email"
                    variant="standard"
                    color="warning"
                    fullWidth
                  />
                  <GroupAddRoundedIcon
                    sx={{
                      color: "action.active",
                      mr: 1,
                      my: 0.5,
                      fontSize: 30,
                    }}
                  />
                </Box>
              </Row>

              {/* Search Button */}
              <Row className="row__allow__gutter">
                <Col md={{ span: 8, offset: 2 }} className="d-grid">
                  <Button
                    variant="primary"
                    size="lg"
                    style={{
                      backgroundColor: "#FF6666",
                      borderColor: "#ff6666",
                    }}
                  >
                    Search
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Recommended */}
      <Row className="px-0 pt-5 row__allow__gutter">
        <Col md={2}>
          <h4>Recommended</h4>{" "}
        </Col>
        <Col md={{ span: 2, offset: 8 }}>
          <Row>
            <h5>See All</h5>
          </Row>
        </Col>
      </Row>
      <Row className="px-5 mb-3 row__allow__gutter">
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

      {/* Most Viewed */}
      <Row className="px-0 pt-5 row__allow__gutter">
        <Col md={2}>
          <h4>Most Viewed</h4>{" "}
        </Col>
        <Col md={{ span: 2, offset: 8 }}>
          <Row>
            <h3>See All</h3>
          </Row>
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
