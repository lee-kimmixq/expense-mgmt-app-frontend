import React from "react";
import { Button } from "@mui/material";
import GenerateIcon from "./GenerateIcon";
// import axios from "axios";

export default function PrimaryBtn ({buttonLabel,onClickCallback, marginTop, buttonColorPalette, icon, iconColor}) {
  return (
      <Button 
        sx={{
          display: 'flex', 
          width: '100%', 
          marginTop: {marginTop}, 
        }}  
        color={buttonColorPalette}
        variant="contained"
        startIcon={icon ? <GenerateIcon name={icon} color={iconColor} /> : ''}
        onClick={onClickCallback}
      >
        {buttonLabel ? buttonLabel : ''}
      </Button>
  );
}

