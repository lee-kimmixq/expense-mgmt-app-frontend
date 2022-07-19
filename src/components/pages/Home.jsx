import React from "react";
import Box from "@mui/material/Box"
import PrimaryBtn from "../UI/atoms/PrimaryBtn.jsx";
import Image from "../../utils/giphy.webp";
import { useNavigate } from "react-router-dom";

export default function Login () {

  let navigate = useNavigate();

  return (
    <Box sx={{
      backgroundImage: `url(${Image})`,
      backgroundColor: 'rgba(1, 0, 6, 0.8)',
      backgroundBlendMode: 'soft-light',
      backgroundSize: 'cover',
      padding: 0,
      margin: 0,
      width: '100%',
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      
      <Box
        sx={{
          display: 'inline-flex',
          flexDirection: 'column',
          rowGap: '10px',
          width: '70%',
          justifyContent: 'center',
          height: '90%'
          }}
        >
          <h1
            style={{
              fontSize: '4em',
              textAlign: 'left',
              lineHeight: 1,
              margin: 0,
              marginBottom: '0.3em'
            }}
          >make cents.</h1>
          <PrimaryBtn buttonLabel={'Login'} onClickCallback={()=>{navigate('/login', {replace: true})}} />
          <PrimaryBtn buttonLabel={'Register'} buttonColorPalette="light" onClickCallback={()=>{navigate('/signup', {replace: true})}}/>
           
      </Box>
      <Box sx={{
        height: '5%'
      }}>
        <p style={{
         fontSize: '0.8em'
        }}>
        © Kimmi&Diyana 2022</p>
      </Box>
     
    </Box>
  );
}

