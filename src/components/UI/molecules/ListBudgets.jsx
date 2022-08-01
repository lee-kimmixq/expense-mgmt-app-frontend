import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import React from "react";
import ListTxnText from "../atoms/ListTxnText";
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CategoryAvatar from "../molecules/CategoryAvatar.jsx";
import LinearProgressBar from "../atoms/LinearProgressBar";
import Switch from '@mui/material/Switch';
import categories from "../../../utils/categories.js";


export default function ListBudgets ({ budgets, pinMode, setShowEditDialog, handlePinChange}) {

  const budgetsList = budgets.length === 0 ? <p>You have no budgets saved.<br></br>Add a budget to get started!</p> : budgets.map((budget) => {
    const listBudgetJsx = (
      <Box key={`budget${budget.id}`} onClick={()=>{setShowEditDialog(budget)}}>
        <ListItem 
          disableGutters
          secondaryAction={
            <ListTxnText ege="end" textValue={`$${budget.total}`} />
          }
          key={`budgetList${budget.id}`}
          >
            <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
              { pinMode && <Switch checked={budget.showInDashboard} onChange={() => { handlePinChange(budget.id, !budget.showInDashboard) }} onClick={(e) => e.stopPropagation()}/> }
              <ListItemAvatar>
                <CategoryAvatar categoryName={budget["category.name"]}/>
              </ListItemAvatar>
              <ListTxnText textValue={budget["category.name"]}/>
            </Box>
          </ListItem>
          <LinearProgressBar categoryColor={categories.filter(category => category.name === budget["category.name"])[0].color} totalExp={Number(budget.total) <= Number(budget.amount) ? budget.total : budget.amount} budgetAmt={budget.amount} />
      </Box>
    )
    return listBudgetJsx;
  });

  return (
    <List dense>
      {budgetsList}
    </List>
  );
}