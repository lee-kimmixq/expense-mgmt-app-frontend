import React from "react";
import { Link } from "@mui/material";
// import axios from "axios";

export default function LinkTxt ({linkText, onClickCallback}) {

  return (
    <Link onClick={onClickCallback} underline="always" color="inherit">
      {linkText}
    </Link>
  );
}


