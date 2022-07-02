import React from "react";
import { Link } from "@mui/material";
// import axios from "axios";

export default function LinkTxt ({linkText, linkURL}) {

  return (
    <Link href={linkURL} underline="always" color="inherit">
      {linkText}
    </Link>
  );
}


