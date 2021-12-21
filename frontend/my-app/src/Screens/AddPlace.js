import React, { useState, useEffect, useCallback } from "react";
import dateFormat, { masks } from "dateformat";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import {
  Rating,
  Typography,
  Divider,
  Paper,
  TextField,
  Alert,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BasicInfo from "../Components/BasicInfo";
import Amenities from "../Components/Amenities";
import RentalDetails from "../Components/RentalDetails";
import {
  fetchAmenities,
  fetchRentalTypes,
  fetchAddresses,
  addRental,
} from "../app/Actions/hostActions";
import LinearProgress from "@mui/material/LinearProgress";

const steps = ["Basic Info", "Ameneties", "Rental Details"];

export default function HorizontalNonLinearStepper() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.user.user);
  // const amenities = useSelector((state) => state.host.amenities);
  // const rentalTypes = useSelector((state) => state.host.rentalTypes);

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  //   Basic Info fields
  const [placeName, setPlaceName] = useState("");
  const [location, setLocation] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");
  const basicInfoFields = {
    placeName,
    setPlaceName,
    address,
    setAddress,
    about,
    setAbout,
  };

  //   Facilities
  const [facilities, setFacilities] = useState([]);
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [houseRules, setHouseRules] = useState([]);

  // Dates and Prices
  const [pricePerDay, setPricePerDay] = useState([]);
  const [availabilityDates, setAvailabilityDates] = useState([]);
  const [roomTypes, setRoomTypes] = useState([]);
  const [selectedRoomType, setSelectedRoomType] = useState("");
  const [noOfBeds, setNoOfBeds] = useState(0);
  const [roomNumbers, setRoomNumbers] = useState(0);
  const [noOfGuests, setNoOfGuests] = useState(0);
  const datePriceFields = {
    pricePerDay,
    setPricePerDay,
    availabilityDates,
    setAvailabilityDates,
    roomTypes,
    setRoomTypes,
    selectedRoomType,
    setSelectedRoomType,
    noOfBeds,
    setNoOfBeds,
    roomNumbers,
    setRoomNumbers,
    noOfGuests,
    setNoOfGuests,
  };

  const fetchAmenitiesRentalTypes = useCallback(async () => {
    const userAccessToken = await userDetails.accessToken;
    setFacilities(await dispatch(fetchAmenities(userAccessToken)));
    setRoomTypes(await dispatch(fetchRentalTypes(userAccessToken)));
    setLocation(await dispatch(fetchAddresses(userAccessToken)));
  }, []);

  useEffect(() => {
    fetchAmenitiesRentalTypes();
    setLoading(false);
    console.log(facilities);
    console.log(roomTypes);
  }, []);

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = async () => {
    const startDate = dateFormat(availabilityDates[0], "yyyy-mm-dd");
    const endDate = dateFormat(availabilityDates[1], "yyyy-mm-dd");

    const addRentalDetails = {
      name: placeName,
      description: about,
      addressLine1: address,
      addressLine2: null,
      location_id: selectedLocation,
      dateFrom: startDate,
      dateTo: endDate,
      pricePerDay: pricePerDay,
      rentalTypeId: selectedRoomType,
      numberOfRooms: roomNumbers,
      numberOfGuests: noOfGuests,
      services: selectedFacilities,
      host_id: userDetails.userId,
    };

    const response = await dispatch(
      addRental(addRentalDetails, userDetails.accessToken)
    );
    console.log(response);
    if (!response.success) {
      setError(response.error);
    } else {
      navigate("/");
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <>
      {loading || facilities.length === 0 || roomTypes.length === 0 ? (
        <LinearProgress />
      ) : (
        <Box sx={{ width: "100%" }}>
          {error !== "" ? (
            <Alert
              style={{
                backgroundColor: "#ff6666",
                color: "white",
                borderColor: "#ff6666",
              }}
            >
              {error}
            </Alert>
          ) : null}
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <div>
            {allStepsCompleted() ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {/* <BasicInfo /> */}
                {activeStep === 0 && (
                  <BasicInfo
                    basicInfoFields={basicInfoFields}
                    location={location}
                    selectedLocation={selectedLocation}
                    setSelectedLocation={setSelectedLocation}
                  />
                )}

                {/* Amenities & Rental Rules */}
                {activeStep === 1 && (
                  <Amenities
                    facilities={facilities}
                    selectedFacilities={selectedFacilities}
                    setSelectedFacilities={setSelectedFacilities}
                  />
                )}

                {/* Date, Price and Other Details */}
                {activeStep === 2 && (
                  <RentalDetails datePriceFields={datePriceFields} />
                )}

                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="secondary"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button
                    color="warning"
                    onClick={handleNext}
                    sx={{ mr: 1 }}
                    disabled={activeStep === 2}
                  >
                    Next
                  </Button>
                  {activeStep !== steps.length &&
                    (completed[activeStep] ? (
                      <Typography
                        variant="caption"
                        sx={{ display: "inline-block" }}
                      >
                        Steps {activeStep + 1} already completed
                      </Typography>
                    ) : (
                      <Button
                        onClick={handleComplete}
                        disabled={activeStep !== steps.length - 1}
                      >
                        Finish
                      </Button>
                    ))}
                </Box>
              </React.Fragment>
            )}
          </div>
        </Box>
      )}
    </>
  );
}
