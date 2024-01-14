import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { demoVideoUrl } from "../utils/constants";

function VideoCard({ item }) {
  return (
    <Box mb={2} sx={{ width: "30%", border: "2px solid black" }}>
      <Link to={item?.id?.videoId ? `/videoDetails/${item?.id?.videoId}` : demoVideoUrl}>
      <img
        src={item?.snippet?.thumbnails?.default?.url}
        alt="demovideo"
        style={{ width: "100%", objectFit: "cover" }}
      />
      <Box pl={1}>
        <h3>{item?.snippet?.title}</h3>
        <h4>{item?.snippet?.channelTitle}</h4>
      </Box>
      </Link>
      
    </Box>
  );
}

export default VideoCard;
