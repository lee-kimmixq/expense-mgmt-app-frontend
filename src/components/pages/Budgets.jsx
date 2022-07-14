import React, { useState } from "react";
import Box from "@mui/material/Box"
import PageHeader from "../UI/atoms/PageHeader.jsx"; 
import NavBar from "../UI/organisms/NavBar.jsx"
// import GenerateIcon from "../UI/atoms/GenerateIcon.jsx"
import PrimaryBtn from "../UI/atoms/PrimaryBtn.jsx";
import FormDialog from "../UI/organisms/FormDialog.jsx";
import ListBudgets from "../UI/molecules/ListBudgets.jsx";

export default function Breakdown () {

  const [showDialog, setShowDialog] = useState(false);
  const [pinMode, setPinMode] = useState(false);

  const handleClickPin = () => {
    setPinMode(!pinMode);
  };

  const dummyBudgets = 
    [
        {
            "id": 1,
            "userId": 1,
            "categoryId": 1,
            "categories": [{
              "name": "Food & Drinks",
              "color": "#5948D3",
              "icon": "restaurant"
           }],
            "amount": "500.00",
            "showInDashboard": true,
            "createdAt": "2022-07-13T11:52:45.818Z",
            "updatedAt": "2022-07-13T11:52:45.818Z"
        },
        {
            "id": 2,
            "userId": 1,
            "categoryId": 4,
            "categories": [{
              "name": "Shopping",
              "color": "#7e57c2",
              "icon": "shopping_bag",
            }],
            "amount": "750.00",
            "showInDashboard": true,
            "createdAt": "2022-07-13T11:52:45.818Z",
            "updatedAt": "2022-07-13T11:52:45.818Z"
        },
        {
            "id": 3,
            "userId": 1,
            "categoryId": 2,
             "categories": [{
              "name": "Taxi",
              "color": "#CF65F2",
              "icon": "hail",
            }],
            "amount": "300.00",
            "showInDashboard": false,
            "createdAt": "2022-07-13T11:52:45.818Z",
            "updatedAt": "2022-07-13T11:52:45.818Z"
        }
    ]
  

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
      <ListBudgets budgets={dummyBudgets} pinMode={pinMode}/>
      <NavBar />
    </Box>
  );
}

