import React from "react";
import { Icon } from "@mui/material";


export default function GenerateIcon ({ name }) {
  return (
    <Icon sx={{ color: '#fff', transform: 'scale(0.9)' }}>{name}</Icon>
  )
};