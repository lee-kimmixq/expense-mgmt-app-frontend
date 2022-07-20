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
import DeleteBudgetAlertDialog from "../UI/molecules/DeleteBudgetAlertDialog"

export default function Breakdown () {

  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showConfirmDeleteDialog, setShowConfirmDeleteDialog] = useState(false);
  const [pinMode, setPinMode] = useState(false);
  const [showPinErrorAlert, setShowPinErrorAlert] = useState(false);
  const [showAddSuccessAlert, setShowAddSuccessAlert] = useState(false);
  const [showEditSuccessAlert, setShowEditSuccessAlert] = useState(false);
  const [showDeleteSuccessAlert, setShowDeleteSuccessAlert] = useState(false);

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

  const handleEditBudget = async (reqBody, isAdd) => {
    const { data: postData } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/budgets`, reqBody);
    if (postData.newBudget) {
      mutate()
      if (isAdd) {
        setShowAddDialog(false);
        setShowAddSuccessAlert(true);
      } else {
        setShowEditDialog(false);
        setShowEditSuccessAlert(true);
      }
    }
  }

  const handleDeleteBudget = async () => {
    const { data: deleteData } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/budgets/${showEditDialog.id}`);
    if (deleteData.deactivate) {
      mutate();
      setShowEditDialog(false);
      setShowDeleteSuccessAlert(true);
      setShowConfirmDeleteDialog(false);
    } 
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
      {showAddSuccessAlert && <AlertSnackbar alertSeverity={'success'} alertLabel={'Successfully added new budget'} displayAlert={true}/>}
      {showEditSuccessAlert && <AlertSnackbar alertSeverity={'success'} alertLabel={'Successfully edited budget'} displayAlert={true}/>}
      {showDeleteSuccessAlert && <AlertSnackbar alertSeverity={'success'} alertLabel={'Successfully deleted budget'} displayAlert={true}/>}
      {showConfirmDeleteDialog && <DeleteBudgetAlertDialog handleDeleteConfirmation={handleDeleteBudget} showDialog={showConfirmDeleteDialog} setShowDialog={setShowConfirmDeleteDialog} />} 
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
          onClickCallback={()=>{setShowAddDialog(true)}} 
          />
      {showAddDialog && <FormDialog 
        handleClickOpen={showAddDialog} 
        setOpen={setShowAddDialog} handleEditBudget={handleEditBudget}/>} 
      
      <ListBudgets budgets={data.budgets} pinMode={pinMode} setShowEditDialog={setShowEditDialog} handlePinChange={handlePinChange}/>
      {showEditDialog && <ThreeBtnFormDialog
        budget={showEditDialog} setShowEditDialog={setShowEditDialog} handleEditBudget={handleEditBudget} setShowConfirmDeleteDialog={setShowConfirmDeleteDialog}/>
      } 
      <NavBar />
    </Box>
  );
}

