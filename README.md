# Frontend Mentor - Order summary card solution

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See hover states for interactive elements

### Screenshot

![](https://i.im.ge/2021/10/13/or7WQ9.png)

### Links

- Live Site URL: [https://quirky-wilson-c38124.netlify.app/)

## My process

### Built with

- Material-ui
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I learnt how properly to style and override style to my advantage using material-ui new features.

```Card.js
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

```
```App.js
import "./App.css";
import Card from "./components/Card";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import bgImage from "./images/pattern-background-mobile.svg";
import bgImage1 from "./images/pattern-background-desktop.svg";

function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: { xs: `url(${bgImage})`, md: `url(${bgImage1})` },
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

        backgroundPosition: { xs: "0px", md: "0px" },
        p: "2rem",
      }}
    >
      <CssBaseline />
      <Card />
    </Box>
  );
}

export default App;

```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

### Continued development

This project can be better than this and the code can be organzied more better than this but i won't be adding any more work to it. If you have any contribution to make it better i will be appricaite it.


## Author

- Website - [Daniel Nweze](https://daniel-nweze.netlify.app/)
- Frontend Mentor - [@Flashdaniel](https://www.frontendmentor.io/profile/Flashdaniel)
- Linkdin- (https://www.linkedin.com/in/daniel-nweze-017909214/)


## Acknowledgments

I Thank God almight for his help and grace to work on this project.
