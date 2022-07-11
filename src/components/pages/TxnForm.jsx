import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box"
import AddTxnForm from "../UI/organisms/AddTxnForm.jsx";
import GenerateIconLarge from "../UI/atoms/GenerateIconLarge.jsx";
import NavBar from "../UI/organisms/NavBar.jsx"
import PrimaryBtn from "../UI/atoms/PrimaryBtn.jsx";
import axios from "axios";
import DeleteAlertDialog from "../UI/molecules/DeleteAlertDialog.jsx";

export default function TxnForm () {
  const [showDialog, setShowDialog] = useState(false);

  const txnId = window.location.pathname.split('/')[2];
  
  let navigate = useNavigate();

  const handleTxnDelete = () => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/transactions/${txnId}`)
      .then(({ data }) => {
        if(data.success) navigate("/txns", { replace: true, state: {txnDeleteSuccess: true}});
      })
  }

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
      <GenerateIconLarge name={'paid'}/>
      <AddTxnForm txnId={txnId}/>
      <NavBar />
      {txnId !== "add" && <PrimaryBtn buttonLabel={'Delete'} buttonColorPalette={'error'} onClickCallback={()=>{setShowDialog(true)}} />}
      {showDialog && <DeleteAlertDialog handleDeleteConfirmation={handleTxnDelete} showDialog={showDialog} setShowDialog={setShowDialog} />} 
    </Box>
      
  );
}

