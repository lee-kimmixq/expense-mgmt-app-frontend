import React from "react";
import Box from "@mui/material/Box"
import PrimaryBtn from "../UI/atoms/PrimaryBtn.jsx";
import Image from "../../assets/giphy.webp";
import { useNavigate } from "react-router-dom";
import FormAlert from "../UI/atoms/FormAlert.jsx";

export default function Home ({successAlert, failAlert}) {

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
            className="animate__animated animate__bounceInDown"
          >make cents.</h1>

          { successAlert && (<FormAlert alertSeverity={'success'} alertLabel={'Account confirmed'} />) }
          { failAlert && (<FormAlert alertSeverity={'warning'} alertLabel={'User not found'} />) }
          
          
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

