import React from "react";
import Icon from "@mui/material/Icon";
import Box from "@mui/material/Box"


export default function GenerateIconLarge ({name, color}) {
  return (
    <Box>
      <Icon
      sx={{
        fontSize: 100,
        width: '100%',
        color: color,
      }}
      // className="animate__animated animate__flip"
    >
      {name}</Icon>
    </Box>
  )
};