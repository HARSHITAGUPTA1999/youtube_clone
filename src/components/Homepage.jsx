import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import VideosFeed from "./VideosFeed";
import { mockData } from "../utils/mockData";
// import { getDataFromApi } from '../utils/getDataFromApi'

function Homepage() {
  const [selectedCategory, setselectedCategory] = useState("New");

  const [videosData, setvideosData] = useState([]);

 
  useEffect(() => {
  //homepage video data
  //     getDataFromApi(`search?part=snippet&q=New`).then((data)=>{
  //       console.log("data",data);
  //     }
  setvideosData(mockData?.items);
  }, [])


  return (
    <Stack direction="row" sx={{ border: "2px solid red" }}>
      <SideBar
        selectedCategory={selectedCategory}
        setselectedCategory={setselectedCategory}
      />

      <Box>
        <h2>
          <span style={{ color: "red" }}>{selectedCategory}</span> Videos
        </h2>
        <VideosFeed videos={videosData} />
      </Box>
     
    </Stack>
  );
}

export default Homepage;
