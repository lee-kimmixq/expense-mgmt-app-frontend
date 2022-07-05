import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import Box from "@mui/material/Box"
import PrimaryBtn from "../UI/atoms/PrimaryBtn.jsx";
import NavBar from "../UI/organisms/NavBar.jsx";
import useSWR from "swr";
import fetcherDelete from "../../utils/fetcherDelete.mjs";
import { useAuth } from "../../authentication/AuthContext.js"

export default function Account () {
  const [shouldFetch, setShouldFetch] = useState(false);

  let navigate = useNavigate();
  const { login } = useAuth();

  const onSuccess = (data) => {
    setShouldFetch(false);
    console.log(data);
    if (data.logout) login().then(() => {navigate("/login", { replace: true }) });
  }

  const onError = (error) => {
    setShouldFetch(false);
  }

  useSWR(shouldFetch ? [`http://localhost:3004/logout`] : null, fetcherDelete, {onSuccess, onError});

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
          <Box>
            <PrimaryBtn buttonLabel={'Logout'} icon={'logout'}
            onClickCallback={handleLogOutSubmit} 
            />
          </Box>
        </Box>
      <NavBar />
    </Box>
      
  );
}

