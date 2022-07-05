import React from "react";
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import Box from "@mui/material/Box"
import PrimaryBtn from "../UI/atoms/PrimaryBtn.jsx";
import NavBar from "../UI/organisms/NavBar.jsx";
// import axios from "axios";

export default function Account () {
  return (
    <Box
    sx={{
      display: 'inline-flex',
        flexDirection: 'column',
        rowGap: '10px',
        width: '80%',
        marginTop: '10vmin'
      }}
    >
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
        }}>
          <PageHeader pageTitle={`Account`} />
          <Box>
            <PrimaryBtn buttonLabel={'Logout'} icon={'logout'}
            // onClickCallback={handleLogOutSubmit} 
            />
          </Box>
        </Box>
      <NavBar />
    </Box>
      
  );
}

