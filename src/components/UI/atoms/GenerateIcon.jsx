import React from "react";
import { Icon } from "@mui/material";


export default function GenerateIcon ({ name, color, scale }) {

  return (
    <Icon sx={{ color: color ? color : '#fff', transform: scale ? scale : 'scale(0.9)' }}>{name}</Icon>
  )
};