import React, { useState } from "react";
import Box from "@mui/material/Box"
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import NavBar from "../UI/organisms/NavBar.jsx"
import PrimaryBtn from "../UI/atoms/PrimaryBtn.jsx";
import FormDialog from "../UI/organisms/FormDialog.jsx";
import ThreeBtnFormDialog from "../UI/organisms/ThreeBtnFormDialog.jsx";
import ListBudgets from "../UI/molecules/ListBudgets.jsx";
import useBudgets from "../../utils/useBudgets.js";
import Loading from "./Loading"
import axios from "axios";
import AlertSnackbar from "../UI/atoms/AlertSnackbar"

export default function Breakdown () {

  const [showDialog, setShowDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [pinMode, setPinMode] = useState(false);
  const [showPinErrorAlert, setShowPinErrorAlert] = useState(false);

  const handleClickPin = () => {
    setPinMode(!pinMode);
  };

  const { data, isLoading, mutate } = useBudgets();
  
  if (isLoading) return <Loading />;
  console.log(data);

  const handlePinChange = async (id, newState) => {
    const { data: putData } = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/budgets/${id}`, { showInDashboard: newState })
    if (!putData.update) return setShowPinErrorAlert(true);
    const [ budgetChanged ] = data.budgets.filter(budget => budget.id === id);
    mutate({ budgets : [...data.budgets, {...budgetChanged, showInDashboard: newState }]});
  }


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
      {showPinErrorAlert && <AlertSnackbar alertSeverity={'error'} alertLabel={'Unable to pin category - You already have 3 pinned categories'} displayAlert={true}/>}
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
        handleClickOpen={showDialog} 
        setOpen={setShowDialog} />} 
      
      <ListBudgets budgets={data.budgets} pinMode={pinMode} setShowEditDialog={setShowEditDialog} handlePinChange={handlePinChange}/>
      {showEditDialog && <ThreeBtnFormDialog 
        // handleDeleteConfirmation={handleTxnDelete} 
        handleClickOpen={showEditDialog} 
        setOpen={setShowEditDialog} setShowEditDialog={setShowEditDialog} budgetAmt={showEditDialog.amount} category={showEditDialog.categoryId} showEditDialog={showEditDialog}/>
      } 
      <NavBar />
    </Box>
  );
}

