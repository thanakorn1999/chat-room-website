import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Typography, TextField } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ThemedButtonContained from "components/ThemedButtonContained";
import { useDispatch } from "react-redux";
import { setUserName } from "store/reducers/userSlice";

const StyledLink = styled(RouterLink)(({ theme }) => ({
  display: "inline-block",
  textDecoration: `none`,
  color: `unset`,
  "&:focus, &:hover, &:visited, &:link,&:active": {
    textDecoration: `none`,
  },
}));

export function SetName() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleSetName = () => {
    dispatch(setUserName(name));
  };

  return (
    <>
      <Typography fontSize={37} fontWeight={600} align={`center`}>
        ชื่อของคุณ
      </Typography>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ my: 3 }}
      >
        <Grid item xs={12} md={10}>
          <TextField
            inputProps={{ min: 0, style: { textAlign: "center" } }}
            id="field-username"
            variant="outlined"
            sx={{ width: `100%` }}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={"auto"}>
          {/* color={({ theme }) => theme.palette.otherColor.grey.main} */}
          {/* to={`/room/1`} */}
          <ThemedButtonContained
            size="large"
            component={StyledLink}
            onClick={handleSetName}
          >
            ยืนยัน
          </ThemedButtonContained>
        </Grid>
      </Grid>
    </>
  );
}
