import React from "react";
import { styled } from '@mui/system';

// Create a styled component for the form
const useStyles = styled('form')(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(1),
  // Add any additional styles you want to apply to the form here
}));


// The Form component using StyledForm
export const Form = ({ children, ...props }) => {
    
  return (
    <form className={useStyles} {...props} noValidate>{children}</form>
  );
};
