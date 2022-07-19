import React, { useState } from "react";
import Box from "@mui/material/Box"
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import NavBar from "../UI/organisms/NavBar.jsx"
import PrimaryBtn from "../UI/atoms/PrimaryBtn.jsx";
import FormDialog from "../UI/organisms/FormDialog.jsx";
import ListBudgets from "../UI/molecules/ListBudgets.jsx";
import useSWR from "swr";
import fetcher from "../../utils/fetcher.mjs";

export default function Breakdown () {

  const [showDialog, setShowDialog] = useState(false);
  const [pinMode, setPinMode] = useState(false);
  const [shouldFetch, setShouldFetch] = useState(true); 
  const [budgets, setBudgets] = useState([]);

  const handleClickPin = () => {
    setPinMode(!pinMode);
  };

  const onSuccess = (data) => {
    if (data) {
      setShouldFetch(false);
      setBudgets(data.budgets);
      console.log(data.budgets);
    }
  }

  useSWR(shouldFetch ? `${process.env.REACT_APP_BACKEND_URL}/budgets` : null, fetcher.get, {onSuccess});

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
        <Box sx={{
          display: 'flex',
          flexDirection: 'row'
        }}>
          
          {pinMode ? (<PrimaryBtn buttonLabel={'Done'} icon={''} buttonColorPalette={'light'} iconColor={'#5948D3'}
            onClickCallback={handleClickPin} 
            />) : (<PrimaryBtn buttonLabel={'Pin'} icon={'push_pin'} buttonColorPalette={'light'} iconColor={'#5948D3'}
            onClickCallback={handleClickPin} 
            />)}
          </Box>
      </Box>
      <PrimaryBtn buttonLabel={'Add Budget'} icon={'add'}
          onClickCallback={()=>{setShowDialog(true)}} 
          />
          {showDialog && <FormDialog 
            // handleDeleteConfirmation={handleTxnDelete} 
            // dialogTitle={'Add budget'}
            handleClickOpen={showDialog} 
            setOpen={setShowDialog} />} 
      <ListBudgets budgets={budgets} pinMode={pinMode}/>
      <NavBar />
    </Box>
  );
}

