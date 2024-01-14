import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { allChannelVidoes, channelDetailsMockData } from '../utils/mockData';
import VideosFeed from './VideosFeed';

function ChannelDetails() {
const [channelDetails, setchannelDetails] = useState([]);
const [allChannelVideos, setallChannelVideos] = useState([]);
  const {id} = useParams

  useEffect(() => {
   //channel details data
    //     getDataFromApi(`channels?part=snippet&id=${id}`).then((data)=>{
    //       console.log("data",data);
    //     }
    setchannelDetails(channelDetailsMockData?.items?.[0]);

    //all channel videos
    //     getDataFromApi(`videos?part=snippet&id=${id}&order='date'`).then((data)=>{
    //       console.log("data",data);
    //     }
    setallChannelVideos(allChannelVidoes?.items)

  }, [id])
  
console.log("channeldetails",channelDetails);
  return (
    <Stack direction='column'>
      <Box>
        <img width='100%' height='300px' src={channelDetails?.brandingSettings?.image?.bannerExternalUrl} alt="banner"/>
      </Box>
      <Box>
        <h4>CHannel Name : {channelDetails?.snippet?.title}</h4>
        <h5>Subscribers: {channelDetails?.statistics?.subscriberCount}</h5>
        <h5>Video Count: {channelDetails?.statistics?.videoCount}</h5>
        <h5>View Count : {channelDetails?.statistics?.viewCount}</h5>
        <p>CHannel Desc : {channelDetails?.snippet?.description}</p>
      </Box>
      <hr />
      <VideosFeed videos={allChannelVideos} direction='row'/>

    </Stack>
  )
}

export default ChannelDetails