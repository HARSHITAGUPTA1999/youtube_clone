import { IconButton, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function SearchBar() {

  const [searchTerm, setsearchTerm] = useState("");
  const navigate = useNavigate();
  
  const handleInputChange = (event) => {
    console.log("event",event);
    setsearchTerm(event.target.value);
  }

    const handleOnSubmit = (event) => {
      console.log("formsubmit insdie");
    event.preventDefault();
    if(searchTerm) {
      navigate(`/searchFeed/${searchTerm}`);
      setsearchTerm('');
    }
  }

  console.log("searchTerm",searchTerm);
  return (
    <Paper
    component="form"
    onSubmit={handleOnSubmit}
    sx={{ 
    borderRadius: 20,
    border: '1px solid #e3e3e3',
    pl: 2,
    boxShadow: 'none',
    }}
  >
    
    <input
        className='search-bar'
        placeholder="Search Youtube..."
        value={searchTerm}
      onChange={handleInputChange}
    />
    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon />
    </IconButton>
    
  </Paper>
  )
}

export default SearchBar