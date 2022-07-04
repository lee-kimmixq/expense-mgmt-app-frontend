import React from "react";
import PrimaryBtn from "../atoms/PrimaryBtn";
import Box from "@mui/material/Box"

// import axios from "axios";

export default function UploadReceiptBtn () {

  return (
    <Box>
      <PrimaryBtn buttonLabel={'Upload Receipt'} buttonColorPalette={'secondary'} icon={'camera_alt'}/>      
    </Box>
  );
}

