import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function NavBar () {

  const [value, setValue] = React.useState(0);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={6}>
      <BottomNavigation
        sx={{backgroundColor: '#efefef', height: '70px'}}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="" icon={<HomeIcon sx={{fontSize:'2rem'}}/>} />
        <BottomNavigationAction label="" icon={<ReceiptIcon sx={{fontSize:'2rem'}}/>} />
        <BottomNavigationAction label="" icon={<AddCircleIcon sx={{fontSize:'2rem'}}/>} />
        <BottomNavigationAction label="" icon={<AssessmentIcon sx={{fontSize:'2rem'}}/>} />
        <BottomNavigationAction label="" icon={<AccountCircleIcon sx={{fontSize:'2rem'}}/>} />

      </BottomNavigation>
    </Paper>
  )
}