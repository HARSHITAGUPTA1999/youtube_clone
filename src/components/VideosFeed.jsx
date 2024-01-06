import { Box, Stack } from '@mui/material';
import React from 'react'

function VideosFeed({videos}) {

  console.log("videos",videos);
  return (
    <Box p={2}>
      <Stack direction='row' sx={{display: 'flex', flexWrap:'wrap', alignItems: 'center' , justifyContent: 'space-between'}}>
      {videos?.map((item)=>{
        return <Box key={item?.id} mb={2} sx={{width: '30%' , border: '2px solid black'}}>
          <img src={item?.snippet?.thumbnails?.default?.url} alt='demovideo' style={{width: '100%' , objectFit: 'cover'}}/>
          <Box pl={1}>
          <h3>{item?.snippet?.title}</h3>
          <h4>{item?.snippet?.channelTitle}</h4>
          </Box>
          
        </Box>
      })}
      </Stack>
      
    </Box>
  )
}

export default VideosFeed