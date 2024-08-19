import React from "react";
import Container from "@mui/material/Container";
import { styled } from '@mui/system';

// Create a styled Container using MUI's system styled
const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const MainContainer = ({ children, ...props }) => {
  return (
    <StyledContainer
      component="main"
      maxWidth="xs"
      {...props}
    >
      {children}
    </StyledContainer>
  );
};