import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import styled from "styled-components";

/* mui components styling */
export const muiTextFieldStyles = makeStyles({
  root: {
    border: "1px solid white",
    color: "white",
  },
  margin: {
    margin: "10px",
  },
});

export const muiTextFieldPlaceholderStyles = makeStyles({
  root: {
    color: "white",
  },
});

// example reddit button on mui text field documentation
export const useStylesReddit = makeStyles((theme) => ({
  root: {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff",
    },
    "&$focused": {
      backgroundColor: "#fff",
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

// styled components way
export const StyledTextField = styled(TextField)`
  background: transparent;
  color: white;
  & label.Mui-focused {
    color: white;
  }
  & .MuiInput-underline:after {
    border-bottom-color: white;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      color: white;
      border-color: white;
    }
    &:hover fieldset {
      border-color: white;
    }
    &.Mui-focused fieldset {
      color: white;
      border-color: white;
    }
  }
`;
