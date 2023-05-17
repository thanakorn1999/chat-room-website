import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const ThemedButton = styled(Button)(({ theme }) => ({
  color: theme?.palette?.grey?.main,
  "&:hover": {
    transition: "transform 0.15s ease-in-out",
    color: theme?.palette?.primary?.main,
    "&:hover": { transform: "scale3d(1.1, 1.1, 1)" },
  },
}));

export default ThemedButton;
