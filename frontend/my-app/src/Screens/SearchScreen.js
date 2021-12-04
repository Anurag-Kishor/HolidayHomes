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
import SearchCardNavbar from "../Components/SearchCardNavbar";
import logo from "../assets/hhlogo.png";
import "../assets/css/main.css";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import RentalCard from "../Components/RentalCard";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import ReviewDiv from "../Components/ReviewDiv";
import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";

function SearchScreen() {
    return (
        <>
            {/* Cover Photo - Search Form - Navbar */}
            <SearchCardNavbar />
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


