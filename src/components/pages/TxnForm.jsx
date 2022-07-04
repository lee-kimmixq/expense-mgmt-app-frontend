import React from "react";
import Box from "@mui/material/Box"
// import CenteredPageHeader from "../UI/atoms/CenteredPageHeader.jsx";
import AddTxnForm from "../UI/molecules/AddTxnForm.jsx";
import UploadReceiptBtn from "../UI/molecules/UploadReceiptBtn.jsx";
import GenerateIconLarge from "../UI/atoms/GenerateIconLarge.jsx";
import NavBar from "../UI/organisms/NavBar.jsx"
import PrimaryBtn from "../UI/atoms/PrimaryBtn.jsx";
// import axios from "axios";

export default function TxnForm () {
  const txnId = window.location.pathname.split('/')[2];

  return (
    <Box
      sx={{
          display: 'inline-flex',
          flexDirection: 'column',
          rowGap: '10px',
          width: '80%',
          justifyContent: 'center',
        }}
      >
      {/* <CenteredPageHeader text={'Get Started'} /> */}
      <GenerateIconLarge name={'paid'}/>
      <UploadReceiptBtn />
      <AddTxnForm txnId={txnId}/>
      <NavBar />  
      {txnId !== "add" && <PrimaryBtn buttonLabel={'Delete'} buttonColorPalette={'error'} />}
    </Box>
      
  );
}

