import * as React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import { Typography, Paper, TextField } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import GroupsIcon from '@mui/icons-material/Groups';
import GiteIcon from '@mui/icons-material/Gite';
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import BedIcon from '@mui/icons-material/Bed';
import Box from '@mui/material/Box';
import {
    Col,
    Image,
    Navbar,
    Row,
    Card,
    Container,
} from "react-bootstrap";





export default function RentalDetails() {

    const minDate = ("02/05/2021 10:30 AM")
    const maxDate = ("02/05/2021 09:00 AM")
    const dateValue = ("02/06/2021 06:00 PM")
    return (
        <Row style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
            <Col md={5}>
                <Row className="px-5 pt-5">
                    <Paper elevation={5} style={{ padding: 10 }}>
                        <Typography variant="h5" align="center" style={{ marginLeft: 30 }}>
                            Dates and Prices
              </Typography>

                        <hr />
                        <Paper
                            variant="outlined"
                            style={{
                                padding: 20,
                                borderColor: "#ff6666",
                                marginBottom: 35,
                            }}
                        >

                            {/* <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Gilad Gray"
          /> */}
                            <Row >
                                <Col md="12">
                                    <Row className="h-10 d-flex flex-row align-items-center mx-3">
                                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                                            <CurrencyRupeeIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                                            <TextField
                                                id="input-with-sx"
                                                label="Price Per day"
                                                variant="standard"
                                                color="warning"
                                                fullWidth
                                            />
                                        </Box>
                                    </Row>
                                    <Row className="h-20 d-flex flex-row align-items-center mx-3">
                                        <CalendarComponent id="calendar" value={dateValue} min={minDate} max={maxDate} />
                                        {/* akki */}
                                    </Row>

                                </Col>
                            </Row>
                        </Paper>
                    </Paper>
                </Row>
            </Col>
            <Col md={5}>
                <Row className="px-5 pt-5">
                    <Paper elevation={5} style={{ padding: 10 }}>
                        <Typography variant="h5" align="center" style={{ marginLeft: 30 }}>
                            Room Information
              </Typography>
                        <hr />
                        <Paper
                            variant="outlined"
                            style={{
                                padding: 20,
                                borderColor: "#ff6666",
                                marginBottom: 35,
                            }}
                        >

                            <Row >
                                <Col md="5">
                                    <Row className="h-10 d-flex flex-row align-items-center mb-3">
                                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                                            <RoomPreferencesIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                                            <TextField
                                                id="input-with-sx"
                                                label="Room Type"
                                                variant="standard"
                                                color="warning"
                                                fullWidth
                                            />
                                        </Box>
                                    </Row>
                                    <Row className="h-10 d-flex flex-row align-items-center mb-3">
                                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                                            <GiteIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                                            <TextField
                                                id="input-with-sx"
                                                label="Room Number"
                                                variant="standard"
                                                color="warning"
                                                fullWidth
                                            />
                                        </Box>
                                    </Row>
                                </Col>
                                <Col md="1"></Col>

                                <Col md="5">
                                    <Row className="h-10 d-flex flex-row align-items-center mb-3">
                                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                                            <BedIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                                            <TextField
                                                id="input-with-sx"
                                                label="No. of Beds"
                                                variant="standard"
                                                color="warning"
                                                fullWidth
                                            />
                                        </Box>
                                    </Row>
                                    <Row className="h-10 d-flex flex-row align-items-center mb-3">
                                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                                            <GroupsIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                                            <TextField
                                                id="input-with-sx"
                                                label="No. of Guests"
                                                variant="standard"
                                                color="warning"
                                                fullWidth
                                            />
                                        </Box>
                                    </Row>
                                </Col>
                            </Row>
                        </Paper>

                        {/* Add Others Fieled */}
                    </Paper>
                    <hr />
                </Row>
            </Col>
        </Row>);
}