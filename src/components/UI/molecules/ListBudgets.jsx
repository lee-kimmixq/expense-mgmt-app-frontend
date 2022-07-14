import { List, ListItem } from "@mui/material";
import React from "react";
import ListTxnText from "../atoms/ListTxnText";
import { Box } from "@mui/system";
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CategoryAvatar from "../molecules/CategoryAvatar.jsx";
import LinearProgressBar from "../atoms/LinearProgressBar";
import Switch from '@mui/material/Switch';


export default function ListBudgets ({budgets , pinMode}) {

  const dummyTotalExpense = 200;

  const budgetsList = budgets.length === 0 ? <p>You have no budgets saved.<br></br>Add a budget to get started!</p> : budgets.map((budget) => {
    const listBudgetJsx = (
      <Box key={`budget${budget.id}`}>
        <ListItem
          disableGutters
          secondaryAction={
            <ListTxnText ege="end" textValue={`$${dummyTotalExpense}`} />
          }
          key={`budgetList${budget.id}`}
          >
            <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
              { pinMode && <Switch /> }

              <ListItemAvatar>
                <CategoryAvatar categoryName={budget.categories[0].name}/>
              </ListItemAvatar>
              <ListTxnText textValue={budget.categories[0].name}/>
            </Box>
          </ListItem>
          <LinearProgressBar categoryColor={budget.categories[0].color} totalExp={200} budgetAmt={budget.amount} />
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