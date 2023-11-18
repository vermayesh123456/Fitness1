import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';



const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '10px' }, justifyContent: 'none' }} px="20px">
   
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
     
      <Link to="/fitness" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
      <Link to="/bmi" style={{ textDecoration: 'none', color: '#3A1212' }}>BMI Calculator</Link>
      <Link to="/user" style={{ textDecoration: 'none', color: '#3A1212' }}>User</Link>
      <Link to="/food" style={{ textDecoration: 'none', color: '#3A1212' }}>Food Analysis</Link>
      
    </Stack>
  </Stack>
);

export default Navbar;