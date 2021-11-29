import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Row } from "react-bootstrap";

import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";

const InputField = (props) => {
  const CustomIcon = props.IconName;
  return (
    <Row>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        {props.iconPlacement === "left" ? (
          <>
            <CustomIcon
              sx={{
                color: "action.active",
                mr: 1,
                my: 0.5,
                fontSize: 30,
              }}
            />
            <TextField
              id="input-with-sx"
              label="Full Name"
              variant="standard"
              color="warning"
              fullWidth
            />
          </>
        ) : (
          <>
            <TextField
              id="input-with-sx"
              label="Full Name"
              variant="standard"
              color="warning"
              fullWidth
            />{" "}
            <CustomIcon
              sx={{
                color: "action.active",
                mr: 1,
                my: 0.5,
                fontSize: 30,
              }}
            />
          </>
        )}
      </Box>
    </Row>
  );
};

export default InputField;
