import { Box, Stack } from '@mui/material';
import React from 'react'
import VideoCard from './VideoCard';

function VideosFeed({videos,direction}) {

  console.log("videos",videos);
  return (
    <Box p={2}>
      <Stack direction={direction} sx={{display: 'flex', flexWrap:'wrap', alignItems: 'center' , justifyContent: 'space-between'}}>
      {videos?.map((item,idx)=>{
        return <VideoCard key={idx} item={item}/>
      })}
      </Stack>
      
    </Box>
  )
}

export default VideosFeed