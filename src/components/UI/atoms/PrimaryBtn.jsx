import React from "react";
import { Button } from "@mui/material";
import GenerateIcon from "./GenerateIcon";

export default function PrimaryBtn ({buttonLabel, onClickCallback, marginTop, buttonColorPalette, icon, iconColor, btnType}) {

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
        type={btnType}
      >
        {buttonLabel ? buttonLabel : ''}
      </Button>
  );
}

