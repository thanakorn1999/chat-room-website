import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const ThemedButtonContained = styled(Button)(({ theme }) => ({
  "&:hover": {
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.1, 1.1, 1)" },
  },
}));

export default ThemedButtonContained;
