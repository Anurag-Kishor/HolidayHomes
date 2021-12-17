import * as React from 'react';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import RateReviewIcon from '@mui/icons-material/RateReview';
import CreateIcon from '@mui/icons-material/Create';
import { Rating, Typography, Divider, Paper, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import {
    Col,
    Image,
    Navbar,
    Row,
    Card,
    Container,
} from "react-bootstrap";

export default function BasicInfo() {


    return (
        <Row style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <Col md={5}>
                <Row className="px-5 pt-5">
                    <Paper elevation={5} style={{ padding: 10 }}>
                        <Typography variant="h5" align="center" style={{ marginLeft: 30 }}>
                            Amenities
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
                            <Row className="h-100 d-flex flex-row align-items-center mb-3">
                                <h5>Upload an Image</h5>
                                <Box sx={{ display: "flex", alignItems: "flex-end" }}>

                                    <input type="file" name="img" />
                                </Box>
                            </Row>
                            <Row className="h-100 d-flex flex-row align-items-center mb-3">
                                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                                    <CreateIcon
                                        sx={{ color: "action.active", mr: 1, my: 0.5 }}
                                    />
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
                                        variant="standard"
                                        color="warning"
                                        fullWidth
                                        rows={2}
                                        maxRows={4}
                                    />
                                </Box>
                            </Row>
                        </Paper>
                        <hr />
                        <hr />
                    </Paper>
                </Row>
            </Col>
        </Row>);
}