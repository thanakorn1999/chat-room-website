import React from "react";
import styled from "styled-components";
import { Grid, Typography, Box } from "@mui/material";
import ThemedButtonContained from "components/ThemedButtonContained";
import ThemedButton from "components/ThemedButton";
import ThemedLink from "components/ThemedLink";
import { useSelector } from "react-redux";
export function SelectRoom() {
  const userName = useSelector((state) => state.user.name);

  return (
    <>
      <Typography fontSize={37} fontWeight={600} align={`center`}>
        คุณ {userName}
      </Typography>
      <Box sx={{ my: 6 }}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={"auto"}>
            <ThemedButtonContained
              variant="contained"
              size="large"
              component={ThemedLink}
              to={`/room/create`}
            >
              สร้างห้องใหม่
            </ThemedButtonContained>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={"auto"}>
            <ThemedButton
              size="large"
              component={ThemedLink}
              to={`/room`}
              color="grey"
            >
              เข้าร่วมแชท
            </ThemedButton>
          </Grid>
        </Grid>
      </Box>
      {/* <Grid
        sx={{ height: `100%` }}
        container
        justifyContent={"center"}
        align={`center`}
        direction="column"
      >
        <Grid item xs={"auto"}>
          lllll
        </Grid>
        <Grid item xs>
          <Grid
            container
            justifyContent={"center"}
            align={`center`}
            direction="column"
          >
            <Grid item xs>
              <div>asdasd</div>
              <div>asdasd</div>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}
    </>
  );
}
