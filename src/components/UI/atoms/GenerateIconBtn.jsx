import React from "react";
import { IconButton } from "@mui/material";
import GenerateIcon from "./GenerateIcon";
import Box from "@mui/material/Box";


export default function GenerateIconBtn ({ name, color, onClickCallback }) {

  return (
    <Box onClick={onClickCallback}>
      <IconButton sx={{ color: color ? color : '#fff', transform: 'scale(1.3)', padding: 0.5}}>
        <GenerateIcon name={name} />
      </IconButton>
    </Box>
    
  )
};