import * as React from "react";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import RateReviewIcon from "@mui/icons-material/RateReview";
import CreateIcon from "@mui/icons-material/Create";
import {
  Rating,
  Typography,
  Divider,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import Box from "@mui/material/Box";
import { Col, Row } from "react-bootstrap";

export default function BasicInfo() {
  return (
    <Row
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Col md={5}>
        <Row className="px-5 pt-5">
          <Paper elevation={5} className="p-5">
            <Typography variant="h5" align="center" style={{ marginLeft: 30 }}>
              Basic Information
            </Typography>

            <hr />
            <Paper
              variant="outlined"
              style={{
                // padding: 20,
                borderColor: "#ff6666",
                // marginBottom: 35,
              }}
              className="p-4 mb-2"
            >
              <Row className="h-100 d-flex flex-row align-items-center mb-3">
                <Typography variant="h6" className="mb-3">
                  Upload an Image
                </Typography>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <Button
                    variant="contained"
                    component="label"
                    fullWidth
                    style={{
                      backgroundColor: "#FF6666",
                      borderColor: "#ff6666",
                    }}
                  >
                    Upload File
                    <input type="file" hidden />
                  </Button>
                </Box>
              </Row>
              <Row className="h-100 d-flex flex-row align-items-center mb-3">
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <CreateIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                  <TextField
                    id="input-with-sx"
                    label="Place Name"
                    variant="standard"
                    color="warning"
                    fullWidth
                  />
                </Box>
              </Row>
              <Row className="h-100 d-flex flex-row align-items-center mb-3">
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <EditLocationIcon
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="input-with-sx"
                    label="Address"
                    variant="standard"
                    color="warning"
                    fullWidth
                  />
                </Box>
              </Row>
              <Row className="h-100 d-flex flex-row align-items-center mb-3">
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <RateReviewIcon
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    placeholder="Place Description"
                    multiline
                    label="About"
                    variant="standard"
                    color="warning"
                    fullWidth
                    rows={2}
                    maxRows={4}
                  />
                </Box>
              </Row>
            </Paper>
          </Paper>
        </Row>
      </Col>
    </Row>
  );
}
