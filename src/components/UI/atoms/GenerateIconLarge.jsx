import React from "react";
import { Icon } from "@mui/material";
import Box from "@mui/material/Box"


export default function GenerateIconLarge ({name}) {
  return (
    <Box>
      <Icon
      sx={{
        fontSize: 100,
        width: '100%',
        color: '#e0e0e0',
      }}
    >
      {name}</Icon>
    </Box>
  )
};