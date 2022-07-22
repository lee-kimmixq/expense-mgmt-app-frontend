import React from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import Box from "@mui/material/Box"
import NavBar from "../UI/organisms/NavBar.jsx";
import { useAuth } from "../../authentication/AuthContext.js"
import Divider from "@mui/material/Divider";
import AccountProfileHeader from "../UI/atoms/AccountProfileHeader.jsx";
import AccountNavTabs from "../UI/atoms/AccountNavTabs.jsx";
import useUsers from "../../utils/useUsers.js";
import Loading from "./Loading";
import axios from "axios";


export default function Account () {
  let navigate = useNavigate();
  const { logout } = useAuth();

  const { data: userData, isLoading } = useUsers();

  if (isLoading) return <Loading />;

  const handleLogOutSubmit = async () => {
    const { data } = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/users/logout`);
    if (data.logout) logout().then(() => {navigate("/", { replace: true }) });

  }

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
      </Box>
      <Divider />
      <AccountProfileHeader handleLogOutSubmit={handleLogOutSubmit} username={userData.username} />
      <Divider /> 
      <AccountNavTabs navName={'Profile'} navIcon={'person'} />
      <AccountNavTabs navName={'Settings'} navIcon={'settings'} />
      <AccountNavTabs navName={'Notifications'} navIcon={'notifications'} />
      <AccountNavTabs navName={'Privacy'} navIcon={'lock'} />
      <AccountNavTabs navName={'Security'} navIcon={'security'} />
      <AccountNavTabs navName={'Help Centre'} navIcon={'support'} />
      <AccountNavTabs navName={'About'} navIcon={'info'} />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
       }
      }>
        <br></br>
        <p style={{
        fontSize: '0.8em',
        margin: 0,
        color: '#CF65F2'
      }}>
        Terms & Conditions</p>
      <p style={{
        fontStyle: 'italic',
        fontSize: '0.8em',
        margin: 0
      }}>
        © Kimmi&Diyana 2022</p>
      </Box>
      <NavBar />
    </Box>
      
  );
}

