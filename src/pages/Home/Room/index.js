import React, { useState } from "react";

import styled from "styled-components";
import { Button, Grid, Typography, TextField } from "@mui/material";
import ThemedLink from "components/ThemedLink";
import ThemedButtonContained from "components/ThemedButtonContained";
import ThemedButton from "components/ThemedButton";

export function Room() {
  const [room, setRoom] = useState("");

  return (
    <>
      <Typography fontSize={37} fontWeight={600} align={`center`}>
        เข้าร่วมแชท
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
            id="field-join-room"
            variant="outlined"
            sx={{ width: `100%` }}
            type="text"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={3}
      >
        <Grid item xs={"auto"}>
          <ThemedButton size="large" component={ThemedLink} to={`/`}>
            กลับ
          </ThemedButton>
        </Grid>
        <Grid item xs={"auto"}>
          <ThemedButtonContained
            variant="contained"
            size="large"
            component={ThemedLink}
            to={`/room/${room}`}
          >
            เข้าร่วม
          </ThemedButtonContained>
        </Grid>
      </Grid>
    </>
  );
}
