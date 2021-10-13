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
