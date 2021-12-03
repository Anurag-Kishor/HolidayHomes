import React from "react";
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
import logo from "../assets/hhlogo.png";
import "../assets/css/main.css";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import RentalCard from "../Components/RentalCard";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import ReviewDiv from "../Components/ReviewDiv";

function SearchScreen() {
    return (
        <>
            {/* Cover Photo - Search Form - Navbar */}
            <Row
                className="cover-photo-home row__allow__gutter"
                style={{ textAlign: "left" }}
            >
                <Col>
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
                </Col>
            </Row>
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


