import React from "react";
import { Button } from "@mui/material";
// import axios from "axios";

export default function PrimaryBtn ({buttonLabel,onClickCallback }) {
  return (
      <Button sx={{display: 'block', width: '100%'}} variant="contained" onClick={onClickCallback}>{buttonLabel}</Button>
  );
}

