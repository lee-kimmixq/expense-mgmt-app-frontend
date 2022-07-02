import React from "react";
import Box from "@mui/material/Box"
// import CenteredPageHeader from "../UI/atoms/CenteredPageHeader.jsx";
import AddTxnForm from "../UI/molecules/AddTxnForm.jsx";
import UploadReceiptBtn from "../UI/molecules/UploadReceiptBtn.jsx";
import GenerateIconLarge from "../UI/atoms/GenerateIconLarge.jsx";
import NavBar from "../UI/organisms/NavBar.jsx"
// import axios from "axios";

export default function AddTxn () {
  return (
    <Box
      sx={{
          display: 'inline-flex',
          flexDirection: 'column',
          rowGap: '10px',
          width: '60%',
        }}
      >
      {/* <CenteredPageHeader text={'Get Started'} /> */}
      <GenerateIconLarge name={'paid'}/>
      <UploadReceiptBtn />
      <AddTxnForm />
      <NavBar />  
    </Box>
      
  );
}

