import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { relatedVideosMockData, videoDetailsMockData } from "../utils/mockData";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import VideosFeed from "./VideosFeed";
import { demoChannelUrl } from "../utils/constants";

function VideoDetails() {
  const [videoDetails, setvideoDetails] = useState([]);
  const [relatedVidoesData, setrelatedvideosData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log('hi===');
    //video details data
    //     getDataFromApi(`videos?part=snippet&id=${id}`).then((data)=>{
    //       console.log("data",data);
    //     }
    setvideoDetails(videoDetailsMockData?.items?.[0]);

    //related video details data
    //     getDataFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data)=>{
    //       console.log("data",data);
    //     }
    setrelatedvideosData(relatedVideosMockData?.items);

  }, [id]);

  console.log("video details", videoDetails);
  console.log("video id", id);

  return (
    <Stack direction="row" sx={{ border: "2px solid green" }}>
      <Box sx={{ border: "2px solid black" , width: '70%'}}>
        <Box>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls  />
          <h3>{videoDetails?.snippet?.title}</h3>
        </Box>
        <Stack direction="row">
          <Box>
            <Link to={videoDetails?.snippet?.channelId ? `/channelDetails/${videoDetails?.snippet?.channelId}` : demoChannelUrl}>
            <h4 style={{width: '80%'}}>
           Channel: {videoDetails?.snippet?.channelTitle}
          </h4>
            </Link>
         
          </Box>
          
          <h5>Likes: {videoDetails?.statistics?.likeCount}</h5>
        </Stack>

        <Box>
          <h5>
            Views: {videoDetails?.statistics?.viewCount}
          </h5>
          <p >{videoDetails?.snippet?.description}</p>
        </Box>
      </Box>

      <Box flex={1}>
        <VideosFeed videos={relatedVidoesData} direction='column'/>
      </Box>
    </Stack>
  );
}

export default VideoDetails;
