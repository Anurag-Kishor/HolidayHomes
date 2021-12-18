import * as React from "react";
import CreateIcon from "@mui/icons-material/Create";
import { Typography, Paper, TextField } from "@mui/material";
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

const roomtype = [
  {
    value: "single_bed",
    label: "Single Bed",
  },
  {
    value: "double_bed",
    label: "Double bed",
  },
  {
    value: "family_room",
    label: "Family Room",
  },
  {
    value: "queen",
    label: "Queen",
  },
  {
    value: "king",
    label: "King",
  },
];

export default function RentalDetails() {
  const [room_type, setType] = React.useState("EUR");
  const handleChange = (event) => {
    setType(event.target.value);
  };

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
              {/* <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Gilad Gray"
          /> */}
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
                        fullWidth
                      />
                    </Box>
                  </Row>

                  <Row className="h-40 d-flex flex-row align-items-center mx-3">
                    <DateRangePicker
                      appearance="default"
                      style={{ color: "#ff6666 !important" }}
                    />
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
              <Row>
                <Col md="5">
                  <Row className="h-10 d-flex flex-row align-items-center mb-3">
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <RoomPreferencesIcon
                        sx={{ color: "action.active", mr: 1, my: 0.5 }}
                      />
                      <TextField
                        id="input-with-sx"
                        select
                        label="Room Type"
                        value={room_type}
                        variant="standard"
                        color="warning"
                        fullWidth
                        onChange={handleChange}
                      >
                        {roomtype.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
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
    </Row>
  );
}
