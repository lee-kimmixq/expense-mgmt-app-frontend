import React from "react";
import { Button } from "@mui/material";
// import axios from "axios";

export default function PrimaryBtn ({buttonLabel,onClickCallback }) {
  return (
    <div>
      <Button variant="contained" onClick={onClickCallback}>{buttonLabel}</Button>
    </div>
  );
}

