import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Card,
  Box,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, gql } from "@apollo/client";
import { useSelector } from "react-redux";

// Stlyed
const BgRoom = styled(Card)(({ theme }) => ({
  backgroundColor: `#f4f4f4`,
  height: `100%`,
  overflowY: "scroll",
}));

const BgChat = styled(Card)(({ theme }) => ({
  backgroundColor: `#e8e8e8`,
  padding: `3px 8px 3px 8px`,
  margin: `0px 3px 0px 3px`,
}));

const StlyedTextField = styled(TextField)(({ theme }) => ({
  width: `100%`,
}));

// Components
const ItemChat = ({ message, isOwner }) => {
  return (
    <>
      <Typography
        key={message.id}
        variant="chat-username"
        component={"div"}
        align={isOwner ? "right" : "left"}
      >
        {message?.from?.name || "-"}
      </Typography>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent={isOwner ? "flex-end" : "flex-start"}
        spacing={1}
      >
        <Grid item xs={"auto"}>
          <BgChat elevation={0}>
            <Typography
              key={message.id}
              variant="chat-message"
              component={"div"}
            >
              {message.body}
            </Typography>
          </BgChat>
        </Grid>
      </Grid>
    </>
  );
};

//
const GET_MESSAGES = gql`
  query GetMessages($roomName: String!) {
    messages(roomName: $roomName) {
      id
      body
      image
      from {
        name
      }
    }
  }
`;
const SEND_MESSAGE = gql`
  mutation SendMessage($roomName: String!, $message: String!, $name: String!) {
    sendMessage(roomName: $roomName, message: $message, name: $name) {
      successful
    }
  }
`;
export function RoomID() {
  const userName = useSelector((state) => state.user.name);

  const { roomId } = useParams();
  const [message, setMessage] = useState("");
  //
  const { loading, error, data } = useQuery(GET_MESSAGES, {
    variables: { roomName: roomId },
  });

  const [sendMessage] = useMutation(SEND_MESSAGE);
  const handleSendMessage = async () => {
    try {
      await sendMessage({
        variables: {
          roomName: roomId,
          message: message,
          name: userName,
        },
      });
      setMessage("");
      console.log("Sent Message");
    } catch (error) {
      console.error("Failed to send message", error);
    }
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  return (
    <>
      <Grid
        sx={{ height: `100%` }}
        container
        direction="column"
        alignItems="stretch"
        justifyContent="flex-end"
        spacing={1}
      >
        <Grid item xs={"auto"}>
          <Typography variant="title" component={"div"}>
            ห้อง {roomId}
          </Typography>
        </Grid>
        <Grid item xs>
          <BgRoom elevation={0}>
            {/* chat-username */}
            <Container
              sx={{
                my: 1,
              }}
            >
              {data.messages.map((message) => (
                <>
                  <ItemChat
                    key={message.id}
                    message={message}
                    isOwner={message.from.name === userName && !!userName}
                  />
                </>
              ))}
            </Container>
          </BgRoom>
        </Grid>
        <Grid item xs={"auto"}>
          <Box sx={{ position: `relative` }}>
            <Grid
              sx={{
                position: `absolute`,
                width: `100%`,
                height: `100%`,
                px: 1,
                py: 0,
              }}
              container
              direction="column"
              alignItems="end"
              justifyContent="end"
            >
              <Grid item xs={12} md={6}>
                <Typography variant="chat-username" align="end">
                  Enter เพื่อส่ง
                </Typography>
              </Grid>
            </Grid>

            <StlyedTextField
              id="outlined-basic"
              variant="outlined"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
