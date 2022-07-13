import React, { useState } from "react";
import Box from "@mui/material/Box"
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import NavBar from "../UI/organisms/NavBar.jsx"
import GenerateIcon from "../UI/atoms/GenerateIcon.jsx"
import PrimaryBtn from "../UI/atoms/PrimaryBtn.jsx";
import FormDialog from "../UI/molecules/FormDialog.jsx";

export default function Breakdown () {

  const [showDialog, setShowDialog] = useState(false);

  return (
    <Box
    sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        rowGap: '10px',
        width: '80%',
        marginTop: '10vmin'
      }}
    >
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <PageHeader pageTitle={`Budgets`} />
        <Box>
          <PrimaryBtn buttonLabel={'Add'} icon={'add'}
          onClickCallback={()=>{setShowDialog(true)}} 
          />
          {showDialog && <FormDialog 
            // handleDeleteConfirmation={handleTxnDelete} 
            // dialogTitle={'Add budget'}
            handleClickOpen={showDialog} 
            setOpen={setShowDialog} />} 
        </Box>
      </Box>
      
      <NavBar />
    </Box>
  );
}

