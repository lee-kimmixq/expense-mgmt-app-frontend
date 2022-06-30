import React from "react";
import { Button } from "@mui/material";
// import axios from "axios";

export default function PrimaryBtn ({buttonLabel,onClickCallback, marginTop }) {
  return (
      <Button sx={{
        display: 'block', 
        width: '100%', 
        marginTop: {marginTop}, 
        // borderRadius: '10px',
      }} 
      variant="contained" 
      onClick={onClickCallback}
      >
        {buttonLabel}
        </Button>
  );
}

