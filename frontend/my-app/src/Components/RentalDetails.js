import * as React from "react";
import CreateIcon from "@mui/icons-material/Create";
import {
  Typography,
  Paper,
  TextField,
  InputLabel,
  Select,
  FormControl,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import DateRangePicker from "rsuite/DateRangePicker";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import GroupsIcon from "@mui/icons-material/Groups";
import GiteIcon from "@mui/icons-material/Gite";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import BedIcon from "@mui/icons-material/Bed";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { Col, Image, Navbar, Row, Card, Container } from "react-bootstrap";

export default function RentalDetails(props) {
  return (
    <Row
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
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
              <Row>
                <Col md="12">
                  <Row className="h-10 d-flex flex-row align-items-center mx-3 mb-5">
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <CurrencyRupeeIcon
                        sx={{ color: "action.active", mr: 1, my: 0.5 }}
                      />
                      <TextField
                        id="input-with-sx"
                        label="Price Per day"
                        variant="standard"
                        color="warning"
                        value={props.datePriceFields.pricePerDay}
                        onChange={(e) =>
                          props.datePriceFields.setPricePerDay(e.target.value)
                        }
                        fullWidth
                      />
                    </Box>
                  </Row>

                  <Row className="h-40 d-flex flex-row align-items-center mx-3">
                    <DateRangePicker
                      appearance="default"
                      format="yyyy-MM-dd"
                      value={props.datePriceFields.availabilityDates}
                      onChange={props.datePriceFields.setAvailabilityDates}
                      style={{ color: "#ff6666 !important" }}
                    />
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
              <Row>
                <Col md="5">
                  <Row className="h-10 d-flex flex-row align-items-center mb-3">
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <RoomPreferencesIcon
                        sx={{ color: "action.active", mr: 1, my: 0.5 }}
                      />
                      <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 120 }}
                      >
                        <InputLabel>Room Type</InputLabel>
                        <Select
                          value={props.datePriceFields.selectedRoomType}
                          onChange={(e) =>
                            props.datePriceFields.setSelectedRoomType(
                              e.target.value
                            )
                          }
                          label="Room Type"
                          variant="standard"
                          color="warning"
                          fullWidth
                        >
                          {props.datePriceFields.roomTypes.map((option) => (
                            <MenuItem
                              key={option.type_id}
                              value={option.type_id}
                            >
                              {option.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Row>
                  <Row className="h-10 d-flex flex-row align-items-center mb-3">
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <GiteIcon
                        sx={{ color: "action.active", mr: 1, my: 0.5 }}
                      />
                      <TextField
                        id="input-with-sx"
                        label="Room Number"
                        variant="standard"
                        value={props.datePriceFields.roomNumbers}
                        onChange={(e) =>
                          props.datePriceFields.setRoomNumbers(e.target.value)
                        }
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
                      <BedIcon
                        sx={{ color: "action.active", mr: 1, my: 0.5 }}
                      />
                      <TextField
                        id="input-with-sx"
                        label="No. of Beds"
                        variant="standard"
                        color="warning"
                        value={props.datePriceFields.noOfBeds}
                        onChange={(e) =>
                          props.datePriceFields.setNoOfBeds(e.target.value)
                        }
                        fullWidth
                      />
                    </Box>
                  </Row>
                  <Row className="h-10 d-flex flex-row align-items-center mb-3">
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <GroupsIcon
                        sx={{ color: "action.active", mr: 1, my: 0.5 }}
                      />
                      <TextField
                        id="input-with-sx"
                        label="No. of Guests"
                        variant="standard"
                        value={props.datePriceFields.noOfGuests}
                        onChange={(e) =>
                          props.datePriceFields.setNoOfGuests(e.target.value)
                        }
                        color="warning"
                        fullWidth
                      />
                    </Box>
                  </Row>
                </Col>
              </Row>
            </Paper>
          </Paper>
          <hr />
        </Row>
      </Col>
    </Row>
  );
}
