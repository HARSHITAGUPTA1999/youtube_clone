import { IconButton, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

function SearchBar() {
  return (
    <Paper
    component="form"
    // onSubmit={}
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
        // value="abcd"
    //   onChange={}
    />
    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon />
    </IconButton>
    
  </Paper>
  )
}

export default SearchBar