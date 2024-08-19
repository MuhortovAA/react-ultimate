import React from "react";
import Button from "@mui/material/Button"; // Fix 1: Directly import Button
import { styled } from '@mui/material/styles';

// Correctly creating a styled Button using `styled` function. Fix 2: Properly use styled
const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
        backgroundColor: theme.palette.primary.dark, // Just an example of how to handle hover state
    },
}));

export const PrimaryButton = ({ children, ...props }) => {
    return (
        <StyledButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            {...props}
        >
            {children}
        </StyledButton>
    );
};