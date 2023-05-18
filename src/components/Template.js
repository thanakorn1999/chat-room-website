import { Outlet } from "react-router-dom";
import { Container, Card, Grid, CardMedia } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect } from "react";
import imgBg from "assets/images/bg.jpg";
import imgLogo from "assets/images/logo.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const StyledBgImage = styled(Container)(({ theme }) => ({
  background: `url(${imgBg}) no-repeat`, //no-repeat center center
  height: `100vh`,
  width: `100vw`,
  backgroundSize: `cover`,
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: `90vh`,
  borderRadius: `20px !important`,
}));
export function Template() {
  const navigate = useNavigate();
  const userName = useSelector((state) => state.user.name);

  useEffect(() => {
    const handleJoinRoom = () => {
      if (userName === "") {
        navigate("/");
      }
    };
    handleJoinRoom();
  }, []);

  return (
    <>
      <StyledBgImage maxWidth>
        <Container maxWidth="lg" sx={{ my: 2 }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            sx={{ mb: 2 }}
          >
            <Grid item xs={"auto"}>
              <CardMedia
                component="img"
                alt="green iguana"
                sx={{
                  maxWidth: 150,
                }}
                image={imgLogo}
              />
            </Grid>
          </Grid>
          <StyledCard>
            <Container sx={{ py: 3, height: `100%` }}>
              <Outlet sx={{ height: `100% ` }} />
            </Container>
          </StyledCard>
        </Container>
      </StyledBgImage>
    </>
  );
}
