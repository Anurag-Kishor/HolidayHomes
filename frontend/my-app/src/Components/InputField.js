import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const InputField = (props) => {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      {props.iconPlacement === "left" ? (
        <>
          {props.children}
          <TextField
            id="input-with-sx"
            label={props.label}
            type={props.type ? props.type : "text"}
            variant="standard"
            color="warning"
            value={props.value}
            onChange={props.onChange}
            fullWidth
          />
        </>
      ) : (
        <>
          <TextField
            id="input-with-sx"
            label={props.label}
            variant="standard"
            color="warning"
            fullWidth
          />{" "}
          {props.children}
        </>
      )}
    </Box>
  );
};

export default InputField;
