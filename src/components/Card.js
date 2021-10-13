import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import heroTop from "../images/illustration-hero.svg";
import { Button, Link } from "@mui/material";
import musicIcon from "../images/icon-music.svg";
import "./Card.css";

function Card() {
  return (
    <Box sx={cardContainer}>
      <Box
        component="img"
        sx={cardImage}
        alt="person makign order"
        src={heroTop}
      />
      <Box sx={cardTextContainer}>
        <Typography variant="body1" component="h1" gutterBottom>
          <Box sx={cardTextHeading}>Order Summay</Box>
        </Typography>
        <Typography variant="subtitle1" component="h5">
          <Box sx={cardTextSubtitle}>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </Box>
        </Typography>
      </Box>
      <Box sx={{ p: "2rem", pt: 0 }}>
        <Box sx={cardMusicContainer}>
          <Box component="img" alt="play music icon" src={musicIcon} />
          <Box>
            <Typography variant="body2" component="h2">
              <Box sx={cardMusicHeading}>Annual Plan</Box>
            </Typography>
            <Typography variant="subtitle2" component="h5">
              <Box sx={cardTextSubtitle}>$99.99/year</Box>
            </Typography>
          </Box>
          <Link href="#" sx={cardMusicLink}>
            change
          </Link>
        </Box>
      </Box>
      <Box sx={{ p: "2rem", pt: 0 }}>
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            className="button"
            sx={{
              backgroundColor: "hsl(245, 75%, 52%)",
              p: "10px 30px",
              borderRadius: "10px",
              mb: "1rem",
              fontWeight: 900,
              fontFamily: "Red Hat Display",
              textTransform: "none",
              boxShadow: 20,
              fontSize: "16px",
              "&:hover": {
                opacity: 0.7,
                backgroundColor: "hsl(245, 75%, 52%)",
              },
            }}
            fullWidth
          >
            Proceed to Payment
          </Button>
          <Button
            fullWidth
            sx={{
              fontFamily: "Red Hat Display",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 900,
              p: "1rem",
              color: "hsl(223, 47%, 23%)",
              opacity: 0.8,
              "&:hover": {
                opacity: 1,
                backgroundColor: "transparent",
                color: "hsl(223, 47%, 23%)",
              },
            }}
          >
            Cancel Order
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

const cardContainer = {
  borderRadius: "20px",
  backgroundColor: "#fff",
  mx: "auto",
  display: "flex",
  flexDirection: "column",
  fontSize: "16px",
  fontWeight: 500,
  fontFamily: "Red Hat Display",
  maxWidth: "400px",
};

const cardImage = {
  width: "100%",
  height: 180,
  borderTopRightRadius: "20px",
  borderTopLeftRadius: "20px",
  display: "block",
};

const cardTextContainer = {
  p: "2rem",
};

const cardTextHeading = {
  textAlign: "center",
  fontWeight: 900,
  fontSize: "22px",
  color: "hsl(223, 47%, 23%)",
  opacity: 0.9,
  mb: 2,
  fontFamily: "inherit",
};

const cardTextSubtitle = {
  textAlign: "center",
  color: "hsl(224, 23%, 55%)",
  opacity: 0.8,
  fontSize: "16px",
  fontFamily: "inherit",
};

const cardMusicContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "hsl(225, 100%, 98%)",
  p: "1rem",
  borderRadius: "10px",
  fontFamily: "inherit",
};

const cardMusicHeading = {
  fontSize: "1rem",
  color: "hsl(223, 47%, 23%)",
  opacity: 0.9,
  textAlign: "center",
  fontWeight: 900,
  fontFamily: "inherit",
};

const cardMusicLink = {
  fontSize: "16px",
  fontWeight: 900,
  color: "hsl(245, 75%, 52%)",
  fontFamily: "inherit",
  "&:hover": {
    opacity: 0.6,
    color: "hsl(245, 75%, 52%)",
  },
  textDecoration: "underline",
};

export default Card;
