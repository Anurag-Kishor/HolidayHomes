import {
  ButtonBase,
  CardActionArea,
  CardContent,
  CardMedia,
  LinearProgress,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import React, { useEffect, useState, useCallback } from "react";
import { Card, Col, Row } from "react-bootstrap";
import resortPhoto from "../assets/pixabay_maldives-1200.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAvgAndCountReviews } from "../app/Actions/appActions";

const RentalCard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [avg, setAvg] = useState();
  const [count, setCount] = useState();
  const getUser = useSelector((state) => state.user.user);

  const getAvgReviews = useCallback(async () => {
    const userAccessToken = await getUser.accessToken;
    const avgAndCount = await dispatch(
      fetchAvgAndCountReviews(props.rental_id, userAccessToken)
    );
    setAvg(avgAndCount.avg);
    setCount(avgAndCount.count);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (props.rental_id) getAvgReviews();
  }, []);
  return (
    <Paper elevation={3}>
      {loading ? (
        <LinearProgress />
      ) : (
        <Card sx={{ maxWidth: 345 }}>
          <ButtonBase
            onClick={() => {
              navigate(`/rentalinfo/${props.rental_id}`);
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={resortPhoto}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {props.name}
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
                    {props.noOfRooms} ROOMS
                  </Col>
                  <Col
                    md={{ span: 3 }}
                    className="border rounded"
                    style={{ marginLeft: 10 }}
                  >
                    {props.noOfGuests} GUESTS
                  </Col>
                  <Col md={{ span: 3, offset: 2 }}>
                    <Typography variant="body1" align="right">
                      Rs. {props.pricePerDay}
                      /Day
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
                    <Rating name="read-only" value={avg} readOnly />
                  </Col>
                  <Col md={3}>
                    <Typography>{count} Reviews</Typography>{" "}
                  </Col>
                </Row>
              </CardContent>
            </CardActionArea>
          </ButtonBase>
        </Card>
      )}
    </Paper>
  );
};

export default RentalCard;
