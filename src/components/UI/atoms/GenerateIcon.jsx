import React from "react";
import { Icon } from "@mui/material";


export default function GenerateIcon ({ name, color }) {

  const iconColor = color ? color : '#fff'

  return (
    <Icon sx={{ color: color ? color : '#fff', transform: 'scale(0.9)' }}>{name}</Icon>
  )
};