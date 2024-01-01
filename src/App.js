import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import VideoDetails from "./components/VideoDetails";
import ChannelDetails from "./components/ChannelDetails";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ border: "4px solid red" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/videoDetails/:id" exact element={<VideoDetails />} />
          <Route path="/channelDetails/:id" exact element={<ChannelDetails />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
