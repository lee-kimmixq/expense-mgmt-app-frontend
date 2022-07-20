import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import Box from "@mui/material/Box"
import NavBar from "../UI/organisms/NavBar.jsx";
import useSWR from "swr";
import fetcher from "../../utils/fetcher.mjs";
import { useAuth } from "../../authentication/AuthContext.js"
import Divider from "@mui/material/Divider";
import AccountProfileHeader from "../UI/atoms/AccountProfileHeader.jsx";
import AccountNavTabs from "../UI/atoms/AccountNavTabs.jsx";


export default function Account () {
  const [shouldFetch, setShouldFetch] = useState(false);

  let navigate = useNavigate();
  const { logout } = useAuth();

  const onSuccess = (data) => {
    setShouldFetch(false);
    if (data.logout) logout().then(() => {navigate("/", { replace: true }) });
  }

  const onError = (error) => {
    setShouldFetch(false);
  }

  useSWR(shouldFetch ? [`${process.env.REACT_APP_BACKEND_URL}/users/logout`] : null, fetcher.delete, {onSuccess, onError});

  const handleLogOutSubmit = () => {
    setShouldFetch(true);
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
      <AccountProfileHeader handleLogOutSubmit={handleLogOutSubmit} username={'John Tan'} />
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

