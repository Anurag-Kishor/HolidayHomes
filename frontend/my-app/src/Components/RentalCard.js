import {
  CardActionArea,
  CardContent,
  CardMedia,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import resortPhoto from "../assets/pixabay_maldives-1200.jpg";

const RentalCard = () => {
  return (
    <Paper elevation={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={resortPhoto}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Holiday Inn Resort Bali Benoa
            </Typography>
            <Row
              style={{
                alignItems: "center",
                height: "4vh",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Col
                md={{ span: 3 }}
                className="border rounded"
                style={{ marginLeft: 10 }}
              >
                1 ROOM
              </Col>
              <Col md={{ span: 3, offset: 5 }}>
                <Typography variant="body1" align="right">
                  Rs. 4200/Night
                </Typography>
              </Col>
            </Row>
            <Row
              style={{
                alignItems: "center",
                height: "4vh",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Col md={3}>
                <Rating name="read-only" value={5} readOnly />
              </Col>
              <Col md={3}>
                <Typography>49 Reviews</Typography>{" "}
              </Col>
            </Row>
          </CardContent>
        </CardActionArea>
      </Card>
    </Paper>
  );
};

export default RentalCard;
