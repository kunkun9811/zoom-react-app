import React from "react";
import { TextField } from "@material-ui/core";
import { muiTextFieldStyles, muiTextFieldPlaceholderStyles, StyledTextField } from "./MuiTextField.styles";

import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
});

const MyTextField = styled(TextField)({
  borderColor: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  borderRadius: 4,
  color: "white",
  margin: 10,
});

const MuiTextField = () => {
  const textFieldStyles = muiTextFieldStyles();
  const placeholderStyles = muiTextFieldPlaceholderStyles();

  return (
    <TextField
      className={textFieldStyles.margin}
      InputProps={{ classes: textFieldStyles }}
      InputLabelProps={{ classes: placeholderStyles }}
      label="meeting number"
      placeholder="1234567890"
      multiline
      variant="outlined"
    />
  );
};

export default MuiTextField;
