import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

const StyledTypography = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
  fontFamily: "Permanent Marker",
  textAlign: "center",
  fontSize: "40px",
  color: "deeppink",
  textShadow: "1px 1px darkmagenta",
}));

export const Header = () => {
  return (
    <StyledTypography component="h1" variant="h5">
      The Ultimate Form Challenge
    </StyledTypography>
  );
};