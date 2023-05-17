import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

const ThemedLink = styled(RouterLink)(({ theme }) => ({
  display: "inline-block",
  textDecoration: `none`,
  color: `unset`,
  "&:focus, &:hover, &:visited, &:link,&:active": {
    textDecoration: `none`,
  },
}));
export default ThemedLink;
