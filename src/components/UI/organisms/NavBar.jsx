import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

export default function NavBar () {
  const pathname = window.location.pathname
  const [value, setValue] = React.useState(pathname);


  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={6}>
      <BottomNavigation
        sx={{backgroundColor: '#efefef', height: '70px'}}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="" component={Link} to="/home" value={"/home"} icon={<HomeIcon sx={{fontSize:'2rem'}}/>} />
        <BottomNavigationAction label="" component={Link} to="/txns" value={"/txns"} icon={<ReceiptIcon sx={{fontSize:'2rem'}}/>} />
        <BottomNavigationAction label="" component={Link} to="/txns/add" value={"/txns/add"} icon={<AddCircleIcon sx={{fontSize:'2rem'}}/>} />
        <BottomNavigationAction label="" component={Link} to="" value={"reports"} icon={<AssessmentIcon sx={{fontSize:'2rem'}}/>} />
        <BottomNavigationAction label="" component={Link} to="/account" value={"/account"} icon={<AccountCircleIcon sx={{fontSize:'2rem'}}/>} />
      </BottomNavigation>
    </Paper>
  )
}