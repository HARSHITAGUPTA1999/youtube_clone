import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import VideosFeed from './VideosFeed';
import { mockData } from '../utils/mockData';

function SearchFeed() {

  const [videosData, setvideosData] = useState([]);
  const {searchTerm} = useParams();

  console.log("search",searchTerm);

  useEffect(() => {
    //homepage video data
    //     getDataFromApi(`search?part=snippet&q=${searchTerm}`).then((data)=>{
    //       console.log("data",data);
    //     }
    console.log('search feed====');
    setvideosData(mockData?.items);
    }, [searchTerm])

  return (
    <Box>
    <h2>
      Search Results for <span style={{ color: "red" }}>{searchTerm}</span> are as follows:
    </h2>
    <hr />
    <VideosFeed videos={videosData} direction='row'/>
  </Box>
  )
}

export default SearchFeed