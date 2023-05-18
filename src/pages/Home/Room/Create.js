import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Typography, TextField } from "@mui/material";
import ThemedLink from "components/ThemedLink";
import ThemedButtonContained from "components/ThemedButtonContained";
import ThemedButton from "components/ThemedButton";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";

const CREATE_ROOM_MUTATION = gql`
  mutation CreateRoom($roomName: String!) {
    createRoom(roomName: $roomName) {
      successful
    }
  }
`;
export function CreateRoom() {
  const [room, setRoom] = useState("");
  const navigate = useNavigate();

  const [createRoom] = useMutation(CREATE_ROOM_MUTATION);

  const handleCreateRoom = async () => {
    try {
      const { data } = await createRoom({
        variables: {
          roomName: room,
        },
      });

      if (data.createRoom.successful) {
        navigate(`/room/${room}`);
      } else {
        alert("มีห้องนี้อยู่ในระบบแล้ว");
      }
    } catch (error) {
      console.error("Failed to create room", error);
    }
  };
  return (
    <>
      <Typography fontSize={37} fontWeight={600} align={`center`}>
        สร้างห้องใหม่
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
            id="field-create-room"
            variant="outlined"
            sx={{
              width: `100%`,
            }}
            type="text"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleCreateRoom();
              }
            }}
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
            onClick={() => {
              handleCreateRoom();
            }}
          >
            ยืนยัน
          </ThemedButtonContained>
        </Grid>
      </Grid>
    </>
  );
}
