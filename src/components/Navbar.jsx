import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { logo } from '../utils/constants'

function Navbar() {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" p={2}>
        <Link to='/'>
            <img src={logo} alt="homepage logo" height="45"/>
        </Link>
        <SearchBar />
    </Stack>
    
  )
}

export default Navbar